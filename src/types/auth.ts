import { User } from './common'

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

export interface LoginCredentials {
  email: string
  password: string
  remember?: boolean
}

export interface RegisterCredentials {
  email: string
  password: string
  confirmPassword: string
  username: string
  fullName?: string
  acceptTerms: boolean
}

export interface ForgotPasswordData {
  email: string
}

export interface ResetPasswordData {
  token: string
  password: string
  confirmPassword: string
}

export interface ChangePasswordData {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

export interface AuthResponse {
  user: User
  accessToken: string
  refreshToken: string
  expiresIn: number
}

export interface AuthError {
  code: string
  message: string
  field?: string
}

export interface SessionData {
  user: User
  accessToken: string
  refreshToken: string
  expiresAt: number
}

export interface AuthProvider {
  id: string
  name: string
  icon: string
  enabled: boolean
}

export interface OAuthProvider extends AuthProvider {
  clientId: string
  redirectUri: string
  scope: string[]
}

export interface TwoFactorAuth {
  enabled: boolean
  secret?: string
  qrCode?: string
  backupCodes?: string[]
}

export interface SecuritySettings {
  twoFactorAuth: TwoFactorAuth
  loginNotifications: boolean
  sessionTimeout: number
  allowedDevices: Device[]
}

export interface Device {
  id: string
  name: string
  type: 'desktop' | 'mobile' | 'tablet'
  browser: string
  os: string
  lastUsed: string
  current: boolean
  trusted: boolean
}

export interface LoginAttempt {
  id: string
  email: string
  ip: string
  userAgent: string
  success: boolean
  timestamp: string
  location?: {
    country: string
    city: string
  }
}

export interface AuthPermissions {
  canRead: boolean
  canWrite: boolean
  canDelete: boolean
  canAdmin: boolean
  roles: string[]
  permissions: string[]
}
