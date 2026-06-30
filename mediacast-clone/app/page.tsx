"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const handleCheckout = async (plan: "podcast" | "complete") => {
    setIsLoading(plan);
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ plan }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Failed to initiate checkout.");
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-slate-950 text-slate-200 font-sans relative overflow-x-hidden selection:bg-purple-500/30">
      {/* Background Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[80%] md:w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[80%] md:w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* HEADER / NAV */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              href="https://cast.mediatechsolutions.live"
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              &larr; MediaTech Solutions
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-lg font-bold tracking-tight text-white hidden sm:block">MediaCast</span>
          </div>
        </nav>
      </header>

      <main className="flex-grow flex flex-col pt-24 pb-12 gap-16 md:gap-24 z-10 relative px-4 sm:px-12">
        {/* HERO SECTION */}
        <section className="text-center mt-12 md:mt-20">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-200 to-blue-400">
              24/7 Live Broadcast Network
            </span>
          </h1>
          <p className="text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
            Stop letting your back-catalog gather dust. We configure and manage a
            dedicated cloud podcast server that streams your entire episode history
            24/7, keeping listeners on your site longer.
          </p>
          <div className="mt-8">
            <button
              onClick={() => {
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg shadow-purple-500/20 transition-all hover:-translate-y-0.5"
            >
              View Streaming Plans
            </button>
          </div>
        </section>

        {/* THE OBSTACLE SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 py-12 md:py-16 border-y border-slate-900/50 max-w-5xl mx-auto w-full items-center">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-400 uppercase block mb-2">
              The Problem
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              The Content Creator&apos;s Biggest Leak
            </h2>
          </div>
          <div className="space-y-4 text-slate-400 text-sm md:text-base leading-relaxed">
            <p>
              Up to 90% of new listeners only stream your most recent drops,
              while hundreds of hours of your older archive episodes sit
              completely idle on traditional hosting platforms.
            </p>
            <p>
              MediaCast bridges that gap. By transforming your static library into a dynamic, linear broadcast experience that you own entirely, you create a sticky, always-on destination that increases engagement.
            </p>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section id="pricing" className="max-w-4xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Card 1 */}
            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-lg font-bold text-white">The Podcast Server</h3>
                  <div className="text-xl font-bold text-white">$19<span className="text-xs text-slate-500 font-normal">/mo</span></div>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "24/7 Cloud Streaming",
                    "Copy-and-Paste Web Player",
                    "5GB Secure Audio Storage",
                    "Real-Time Listener Stats",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-purple-500 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleCheckout("podcast")}
                disabled={isLoading === "podcast"}
                className="w-full py-3 rounded-xl font-medium border border-slate-700 hover:bg-slate-800 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading === "podcast" ? "Processing..." : "Get Started"}
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-slate-900/40 border border-blue-500/30 rounded-2xl p-6 flex flex-col justify-between relative hover:border-blue-500/50 transition-all shadow-2xl shadow-blue-500/5">
              <div className="absolute -top-3 right-6 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                Most Popular
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-lg font-bold text-white">The Complete Station</h3>
                  <div className="text-xl font-bold text-white">$49<span className="text-xs text-slate-500 font-normal">/mo</span></div>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Everything in Podcast Server",
                    "Custom Station Website",
                    "Auto-Updating Player Page",
                    "15GB Upgraded Storage",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleCheckout("complete")}
                disabled={isLoading === "complete"}
                className="w-full py-3 rounded-xl font-medium bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading === "complete" ? "Processing..." : "Upgrade Now"}
              </button>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="max-w-3xl mx-auto py-16 px-4 w-full border-t border-slate-900/50 mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 md:p-8 hover:border-slate-700/80 transition-all">
              <h3 className="text-base md:text-lg font-semibold text-white mb-3">
                How does the 24/7 stream actually work? Do I need to leave my computer on?
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                No. Your MediaCast station runs entirely on our isolated cloud servers. Once you upload your audio files, our system manages the broadcast loop 24/7. You can shut down your computer or lose internet access entirely—your station will never go offline.
              </p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 md:p-8 hover:border-slate-700/80 transition-all">
              <h3 className="text-base md:text-lg font-semibold text-white mb-3">
                How do my listeners tune in?
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                We provide a beautiful, responsive web player widget. You can easily copy and paste this small code snippet directly onto your existing website (WordPress, Wix, Squarespace, Shopify, etc.). If you choose our Complete Station plan, you get a dedicated web page hosted at your own custom link (e.g., yourshow.cast.mediatechsolutions.live).
              </p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 md:p-8 hover:border-slate-700/80 transition-all">
              <h3 className="text-base md:text-lg font-semibold text-white mb-3">
                Can I still broadcast live whenever I want?
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Yes. While the system automatically loops your back-catalog tracks, you can seamlessly break into the live feed at any time. Simply connect your standard broadcasting software (like OBS Studio, Mixxx, or vMix) to your provided streaming credentials, and the server will instantly switch over to your live microphone or board feed.
              </p>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 md:p-8 hover:border-slate-700/80 transition-all">
              <h3 className="text-base md:text-lg font-semibold text-white mb-3">
                Can I use my own custom .com domain name?
              </h3>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                Yes. While our standard plans include a free custom subdomain on our network, we fully support custom domain mapping. If you want your station to load directly at your own private domain, our technical team can manually configure this for a small, one-time setup fee.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="shrink-0 bg-slate-950 border-t border-slate-900 py-6 px-4 sm:px-12 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-[11px] w-full z-10 relative">
        <div>© {new Date().getFullYear()} MediaCast. A product of MediaTech Solutions.</div>
        <div className="flex items-center gap-4">
          <span>Infrastructure by Stripe</span>
          <span className="hidden sm:block w-px h-3 bg-slate-800"></span>
          <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}
