export const API_ENDPOINTS = {
  // Auth endpoints
  LOGIN: '/api/auth/login',
  REGISTER: '/api/auth/register',
  LOGOUT: '/api/auth/logout',
  REFRESH: '/api/auth/refresh',
  FORGOT_PASSWORD: '/api/auth/forgot-password',
  RESET_PASSWORD: '/api/auth/reset-password',
  VERIFY_EMAIL: '/api/auth/verify-email',

  // User endpoints
  USERS: '/api/users',
  USER_PROFILE: '/api/users/profile',
  USER_SETTINGS: '/api/users/settings',
  USER_AVATAR: '/api/users/avatar',

  // Posts endpoints
  POSTS: '/api/posts',
  POST_CREATE: '/api/posts',
  POST_UPDATE: '/api/posts/[id]',
  POST_DELETE: '/api/posts/[id]',
  POST_LIKE: '/api/posts/[id]/like',
  POST_COMMENT: '/api/posts/[id]/comment',

  // Upload endpoints
  UPLOAD_IMAGE: '/api/upload/image',
  UPLOAD_FILE: '/api/upload/file',
  UPLOAD_AVATAR: '/api/upload/avatar',

  // Analytics endpoints
  ANALYTICS_DASHBOARD: '/api/analytics/dashboard',
  ANALYTICS_USERS: '/api/analytics/users',
  ANALYTICS_POSTS: '/api/analytics/posts',
  ANALYTICS_TRAFFIC: '/api/analytics/traffic',
} as const

export const API_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
} as const

export type ApiEndpoint = typeof API_ENDPOINTS[keyof typeof API_ENDPOINTS]
export type ApiMethod = typeof API_METHODS[keyof typeof API_METHODS]
