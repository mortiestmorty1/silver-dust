export const ROUTES = {
  // Public routes
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  SERVICES: '/services',
  PRICING: '/pricing',
  BLOG: '/blog',
  PRIVACY: '/privacy',
  TERMS: '/terms',

  // Auth routes
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',

  // Dashboard routes
  DASHBOARD: '/dashboard',
  DASHBOARD_ANALYTICS: '/dashboard/analytics',
  DASHBOARD_REPORTS: '/dashboard/reports',
  DASHBOARD_SETTINGS: '/dashboard/settings',

  // Profile routes
  PROFILE: '/profile',
  PROFILE_EDIT: '/profile/edit',
  PROFILE_VIEW: '/profile/view',
  PROFILE_SETTINGS: '/profile/settings',
  PROFILE_SECURITY: '/profile/security',

  // Admin routes
  ADMIN: '/admin',
  ADMIN_USERS: '/admin/users',
  ADMIN_CONTENT: '/admin/content',
  ADMIN_ANALYTICS: '/admin/analytics',
  ADMIN_SETTINGS: '/admin/settings',

  // API routes
  API_AUTH: '/api/auth',
  API_USERS: '/api/users',
  API_POSTS: '/api/posts',
  API_UPLOAD: '/api/upload',
  API_ANALYTICS: '/api/analytics',
} as const

export type RouteKey = keyof typeof ROUTES
export type RouteValue = typeof ROUTES[RouteKey]
