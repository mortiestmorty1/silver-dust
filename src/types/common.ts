// Common types used throughout the application

export interface BaseEntity {
  id: string
  created_at: string
  updated_at: string
}

export interface User extends BaseEntity {
  email: string
  username: string
  full_name?: string
  avatar_url?: string
  role: UserRole
  is_active: boolean
  last_login?: string
}

export type UserRole = 'admin' | 'user' | 'moderator'

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    total_pages: number
  }
}

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'textarea' | 'checkbox' | 'radio'
  placeholder?: string
  required?: boolean
  disabled?: boolean
  options?: SelectOption[]
  validation?: {
    min?: number
    max?: number
    pattern?: string
    message?: string
  }
}

export interface Notification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

export interface Theme {
  name: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    surface: string
    text: string
    textSecondary: string
    border: string
    error: string
    warning: string
    success: string
    info: string
  }
}

export interface Breakpoint {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  '2xl': number
}

export interface LoadingState {
  isLoading: boolean
  error?: string
  data?: any
}

export interface SortOption {
  field: string
  direction: 'asc' | 'desc'
}

export interface FilterOption {
  field: string
  operator: 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'like' | 'in' | 'not_in'
  value: any
}

export interface SearchParams {
  query?: string
  page?: number
  limit?: number
  sort?: SortOption[]
  filters?: FilterOption[]
}

export interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

export interface MenuItem {
  label: string
  href?: string
  icon?: string
  children?: MenuItem[]
  disabled?: boolean
  badge?: string | number
}

export interface StatsCard {
  title: string
  value: string | number
  change?: {
    value: number
    type: 'increase' | 'decrease'
    period: string
  }
  icon?: string
  color?: string
}

export interface ChartData {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    backgroundColor?: string | string[]
    borderColor?: string | string[]
    borderWidth?: number
  }[]
}

export interface TableColumn {
  key: string
  label: string
  sortable?: boolean
  render?: (value: any, row: any) => React.ReactNode
  width?: string | number
  align?: 'left' | 'center' | 'right'
}

export interface TableAction {
  label: string
  onClick: (row: any) => void
  icon?: string
  variant?: 'primary' | 'secondary' | 'danger'
  disabled?: (row: any) => boolean
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  children: React.ReactNode
}

export interface ToastProps {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message?: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}
