interface Platform {
  id: string;
  name: string;
  description: string;
  href: string;
  icon: string;
  category: 'education' | 'ai' | 'automation';
  isExternal: boolean;
  features: string[];
}

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
  children?: NavigationItem[];
  isExternal?: boolean;
}

export const APP_CONFIG = {
  name: 'A2 Pyramid',
  description: 'India\'s Leading AI Education & EdTech Platform',
  version: '2.0.0',
  author: 'A2 Pyramid Technologies',
  contact: {
    email: 'info@a2pyramid.com',
    phone: '+91-XXXXXXXXXX',
    whatsapp: '+91-XXXXXXXXXX'
  },
  social: {
    youtube: 'https://www.youtube.com/@mapmyteacher',
    linkedin: 'https://linkedin.com/company/a2pyramid',
    twitter: 'https://twitter.com/a2pyramid'
  }
} as const;

export const PLATFORMS: Platform[] = [
  {
    id: 'edutech',
    name: 'EdTech Training Platform',
    description: 'Comprehensive learning management system for educational institutions',
    href: '/edtech',
    icon: 'GraduationCap',
    category: 'education',
    isExternal: false,
    features: ['LMS', 'Virtual Classrooms', 'Assessment Tools', 'Progress Tracking']
  },
  {
    id: 'mmt',
    name: 'Map My Teacher',
    description: 'Connect students with qualified teachers across India',
    href: 'https://mmt.a2pyramid.com/',
    icon: 'Users',
    category: 'education',
    isExternal: true,
    features: ['Teacher Matching', 'Online Booking', 'Rating System', 'Payment Gateway']
  },
  {
    id: 'ai-smart',
    name: 'AI Smart Class',
    description: 'AI-powered smart classroom solutions for modern education',
    href: 'https://a2pyramid.com/#/ai-smart-class',
    icon: 'Brain',
    category: 'ai',
    isExternal: true,
    features: ['AI Analytics', 'Smart Content', 'Personalized Learning', 'Real-time Insights']
  },
  {
    id: 'friday',
    name: 'Friday AI Electronics',
    description: 'Advanced AI automation solutions for electronics and IoT',
    href: '/friday',
    icon: 'Cpu',
    category: 'automation',
    isExternal: false,
    features: ['IoT Integration', 'Smart Automation', 'Voice Control', 'Remote Monitoring']
  }
];

export const NAVIGATION: NavigationItem[] = [
  {
    id: 'platforms',
    label: 'Platforms',
    href: '/platforms',
    icon: 'Grid3X3',
    children: PLATFORMS.map(platform => ({
      id: platform.id,
      label: platform.name,
      href: platform.href,
      isExternal: platform.isExternal
    }))
  },
  {
    id: 'about',
    label: 'About Us',
    href: '/about',
    icon: 'Info'
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact',
    icon: 'Mail'
  },
  {
    id: 'more',
    label: 'More',
    href: '#',
    icon: 'MoreHorizontal',
    children: [
      {
        id: 'youtube',
        label: 'YouTube',
        href: APP_CONFIG.social.youtube,
        icon: 'Youtube',
        isExternal: true
      },
      {
        id: 'faq',
        label: 'FAQ',
        href: '/faq',
        icon: 'HelpCircle'
      }
    ]
  }
];

export const THEME_CONFIG = {
  colors: {
    primary: '#0066cc',
    secondary: '#f97316',
    accent: '#6366f1',
    success: '#059669',
    warning: '#d97706',
    error: '#dc2626'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }
} as const;

export const API_ENDPOINTS = {
  base: import.meta.env.VITE_API_BASE_URL || 'https://api.a2pyramid.com',
  auth: '/auth',
  users: '/users',
  platforms: '/platforms',
  testimonials: '/testimonials',
  faq: '/faq'
} as const;