
import React from 'react';
import { 
  Tv, 
  Video, 
  Mic2, 
  Server, 
  Settings, 
  Calendar, 
  ShoppingBag,
  MonitorCheck,
  Layers
} from 'lucide-react';
import { ServiceItem, Testimonial } from './types.ts';

export const COLORS = {
  primary: '#EF4444', // Red-500
  secondary: '#1E293B', // Slate-800
  accent: '#DC2626', // Red-600
};

export const CONSULTANCY_SERVICES: Record<string, ServiceItem> = {
  broadcast: {
    title: 'Broadcast Solutions',
    description: 'Maximize your reach with our professional livestreaming solutions consulting. We design and implement custom livestreaming setups tailored to your specific broadcasting needs.',
    points: [
      'Turn-key Broadcast System Design',
      'Outdoor IRL Streaming Solutions',
      '24/7 Always On Streaming Systems',
      'Multi-streaming Solutions',
      'Self-hosted Private Streaming Platforms',
      'Enhanced Audience Engagement',
      'Podcast Capture, Storage & Distribution'
    ]
  },
  videoConference: {
    title: 'Video Conference Consulting',
    description: 'Elevate your virtual collaboration with our expert video conferencing consulting service. We design and implement tailored solutions that enhance communication and productivity.',
    points: [
      'Hardware and Software Solutions',
      'Video Conference Platform Selection',
      'Meeting Room Integration',
      'Hybrid Meeting and Livestream Solutions',
      'Managed Support Services'
    ]
  },
  audioVisual: {
    title: 'Audio Visual Systems',
    description: 'Enhance your content creation experience with our expert audio-visual systems consulting. We design and implement advanced solutions for recording, post-production, and networked AV.',
    points: [
      'Audio and Video Production Solutions',
      'Podcasting Systems',
      'Networked Audio and Video',
      'Centralized Media Storage'
    ]
  },
  infrastructure: {
    title: 'Media Infrastructure',
    description: 'Optimize your media infrastructure with our expert consulting services. We design and implement tailored solutions for media storage, distribution, and networking.',
    points: [
      'Website Development',
      'Cloud and On-premise Systems',
      'Media Storage Systems',
      'Media Network Deployment',
      'Server Virtualization',
      'AI Transcription Systems'
    ]
  }
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Shelina Nicholas',
    text: 'MediaTech Innovations was simply amazing! Couldn’t have ask for a better partner! Everything was on point! I highly recommended, you won’t be disappointed!'
  },
  {
    name: 'Brian Moten',
    text: 'MediaTech Innovations exceeded all expectations! Our live streaming systems perform flawlessly! Absolutely recommend their services - you\'ll be thrilled with the results!'
  },
  {
    name: 'Sarah Jenkins',
    text: 'Their attention to detail in AV networked systems is unparalleled. They transformed our corporate communications overnight.'
  },
  {
    name: 'David Chen',
    text: 'Seamless implementation of our 24/7 broadcast system. The technical support and consulting provided were top-notch.'
  }
];

export const NAV_LINKS = [
  { name: 'About', path: '/about' },
  { name: 'What We Do', path: '/what-we-do', dropdown: [
    { name: 'Event Operations', path: '/event-ops' },
    { name: 'Consultancy and Design', path: '/consultancy' },
    { name: 'Equipment Sales', path: '/equipment' }
  ]},
  { name: 'Blog', path: 'https://blog.mediatechsolutions.live/', external: true },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
];
