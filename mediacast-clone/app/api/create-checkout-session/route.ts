import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

let stripeClient: Stripe | null = null;

function getStripe(): Stripe {
  if (!stripeClient) {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) {
      throw new Error("STRIPE_SECRET_KEY environment variable is required");
    }
    stripeClient = new Stripe(key, {
      apiVersion: "2026-06-24.dahlia", // use the expected type
    });
  }
  return stripeClient;
}

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripe();
    const { plan } = await req.json();

    if (!plan) {
      return NextResponse.json(
        { error: "Plan is required." },
        { status: 400 }
      );
    }

    let priceId = "";
    if (plan === "podcast") {
      priceId = process.env.STRIPE_PRICE_PODCAST || "";
    } else if (plan === "complete") {
      priceId = process.env.STRIPE_PRICE_COMPLETE || "";
    }

    if (!priceId) {
      return NextResponse.json(
        { error: "Price ID not configured for this plan." },
        { status: 500 }
      );
    }

    // Use APP_URL if configured, otherwise fallback to request origin
    const appUrl = process.env.APP_URL || req.nextUrl.origin;
    // But the user requested success_url and cancel_url to be https://cast.mediatechsolutions.live
    const baseUrl = "https://cast.mediatechsolutions.live";

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${baseUrl}/?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/?canceled=true`,
      custom_fields: [
        {
          key: "station_name",
          label: {
            type: "custom",
            custom: "Desired Podcast Station Name",
          },
          type: "text",
        },
      ],
      // We could also enforce email collection or allow Stripe to handle it
      // `customer_email` or `customer_creation`
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "An error occurred" },
      { status: 500 }
    );
  }
}
