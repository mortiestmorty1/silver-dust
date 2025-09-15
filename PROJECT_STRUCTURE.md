# Silver Dust - Project Structure

This document outlines the comprehensive folder structure and architecture of the Silver Dust application.

## 📁 Root Structure

```
silver-dust/
├── src/                          # Source code
├── public/                       # Static assets
├── docs/                         # Documentation
├── tests/                        # Test files
├── package.json                  # Dependencies and scripts
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── env.example                  # Environment variables template
```

## 🎯 Core Application Structure

### `/src/app/` - Next.js App Router
```
app/
├── layout.tsx                   # Root layout with loading bar
├── page.tsx                     # Homepage
├── globals.css                  # Global styles with silver theme
├── api/                         # API routes
│   ├── auth/                    # Authentication endpoints
│   ├── users/                   # User management
│   ├── posts/                   # Content management
│   ├── upload/                  # File upload
│   └── analytics/               # Analytics data
├── auth/                        # Authentication pages
│   ├── login/
│   ├── register/
│   ├── forgot-password/
│   └── reset-password/
├── dashboard/                   # Dashboard pages
│   ├── analytics/
│   ├── reports/
│   └── settings/
├── profile/                     # User profile pages
│   ├── edit/
│   ├── view/
│   └── settings/
├── admin/                       # Admin panel pages
│   ├── users/
│   ├── content/
│   └── analytics/
└── public/                      # Public pages
    ├── about/
    ├── contact/
    ├── services/
    └── pricing/
```

### `/src/components/` - Reusable Components
```
components/
├── ui/                          # Base UI components
│   ├── button/                  # Button variants
│   ├── input/                   # Form inputs
│   ├── modal/                   # Modal dialogs
│   ├── card/                    # Card layouts
│   ├── table/                   # Data tables
│   ├── form/                    # Form components
│   ├── dropdown/                # Dropdown menus
│   ├── toast/                   # Notifications
│   ├── spinner/                 # Loading indicators
│   ├── progress/                # Progress bars
│   ├── accordion/               # Collapsible content
│   ├── tabs/                    # Tab navigation
│   ├── carousel/                # Image carousels
│   ├── calendar/                # Date picker
│   └── chart/                   # Data visualization
├── layout/                      # Layout components
│   ├── header/                  # Site header
│   ├── footer/                  # Site footer
│   ├── sidebar/                 # Navigation sidebar
│   ├── navigation/              # Navigation menus
│   ├── breadcrumb/              # Breadcrumb navigation
│   └── container/               # Page containers
├── forms/                       # Form components
│   ├── login/                   # Login forms
│   ├── register/                # Registration forms
│   ├── contact/                 # Contact forms
│   ├── profile/                 # Profile forms
│   ├── settings/                # Settings forms
│   ├── search/                  # Search forms
│   └── filter/                  # Filter forms
├── common/                      # Common components
│   ├── loading/                 # Loading states
│   ├── error/                   # Error states
│   ├── success/                 # Success states
│   ├── empty-state/             # Empty states
│   ├── confirmation/            # Confirmation dialogs
│   └── notification/            # Notifications
├── features/                    # Feature-specific components
│   ├── auth/                    # Authentication features
│   ├── dashboard/               # Dashboard features
│   ├── profile/                 # Profile features
│   ├── admin/                   # Admin features
│   └── analytics/               # Analytics features
└── widgets/                     # Dashboard widgets
    ├── stats/                   # Statistics cards
    ├── charts/                  # Chart widgets
    ├── recent-activity/         # Activity feeds
    └── quick-actions/           # Quick action buttons
```

### `/src/lib/` - Core Libraries
```
lib/
├── supabase/                    # Supabase integration
│   ├── client.ts               # Client-side Supabase
│   ├── server.ts               # Server-side Supabase
│   ├── auth/                   # Authentication utilities
│   ├── database/               # Database operations
│   ├── storage/                # File storage
│   └── realtime/               # Real-time subscriptions
├── utils/                       # Utility functions
│   ├── cn.ts                   # Class name utility
│   ├── helpers/                # Helper functions
│   ├── formatters/             # Data formatters
│   ├── validators/             # Validation functions
│   ├── parsers/                # Data parsers
│   └── generators/             # Data generators
├── api/                         # API utilities
│   ├── endpoints/              # API endpoint definitions
│   ├── clients/                # API clients
│   ├── interceptors/           # Request/response interceptors
│   └── transformers/           # Data transformers
├── auth/                        # Authentication utilities
│   ├── providers/              # Auth providers
│   ├── guards/                 # Route guards
│   └── utils/                  # Auth utilities
├── database/                    # Database utilities
│   ├── queries/                # Database queries
│   ├── mutations/              # Database mutations
│   └── subscriptions/          # Real-time subscriptions
└── validations/                 # Validation schemas
    ├── auth/                   # Auth validations
    ├── user/                   # User validations
    ├── post/                   # Post validations
    ├── api/                    # API validations
    └── forms/                  # Form validations
```

### `/src/animations/` - Animation System
```
animations/
├── framer-motion/               # Framer Motion variants
│   └── variants.ts             # Animation variants
├── transitions/                 # Transition configurations
│   └── index.ts                # Transition exports
└── keyframes/                   # CSS keyframe animations
```

### `/src/types/` - TypeScript Definitions
```
types/
├── common.ts                   # Common types
├── auth.ts                     # Authentication types
├── user.ts                     # User types
├── api.ts                      # API types
└── common/                     # Additional common types
```

### `/src/constants/` - Application Constants
```
constants/
├── routes.ts                   # Route definitions
├── api.ts                      # API endpoint constants
├── ui.ts                       # UI constants
├── animations/                 # Animation constants
└── breakpoints/                # Responsive breakpoints
```

### `/src/hooks/` - Custom React Hooks
```
hooks/
├── useAuth/                    # Authentication hook
├── useLocalStorage/            # Local storage hook
└── useApi/                     # API hook
```

### `/src/context/` - React Context Providers
```
context/
├── auth/                       # Authentication context
├── theme/                      # Theme context
├── notification/               # Notification context
├── loading/                    # Loading context
└── modal/                      # Modal context
```

### `/src/store/` - State Management
```
store/
├── auth/                       # Authentication store
├── user/                       # User store
└── ui/                         # UI store
```

### `/src/providers/` - Provider Components
```
providers/
├── auth/                       # Auth provider
├── theme/                      # Theme provider
├── query/                      # React Query provider
└── toast/                      # Toast provider
```

### `/src/services/` - External Services
```
services/
├── api/                        # API service
├── storage/                    # Storage service
├── email/                      # Email service
└── analytics/                  # Analytics service
```

### `/src/middleware/` - Middleware Functions
```
middleware/
├── auth/                       # Authentication middleware
├── logging/                    # Logging middleware
└── error-handling/             # Error handling middleware
```

### `/src/layouts/` - Page Layouts
```
layouts/
├── public/                     # Public page layout
├── auth/                       # Auth page layout
├── dashboard/                  # Dashboard layout
└── admin/                      # Admin layout
```

### `/src/pages/` - Page Components
```
pages/
├── public/                     # Public pages
├── auth/                       # Auth pages
├── dashboard/                  # Dashboard pages
├── profile/                    # Profile pages
└── admin/                      # Admin pages
```

### `/src/icons/` - Icon Management
```
icons/
├── custom/                     # Custom icons
├── external/                   # External icon libraries
└── svg/                        # SVG icons
```

### `/src/styles/` - Styling System
```
styles/
├── components/                 # Component styles
├── pages/                      # Page-specific styles
├── globals/                    # Global styles
└── themes/                     # Theme definitions
```

### `/public/` - Static Assets
```
public/
├── images/                     # Images
│   ├── avatars/               # User avatars
│   ├── products/              # Product images
│   ├── backgrounds/           # Background images
│   └── icons/                 # Icon images
├── icons/                      # Icon files
│   ├── brand/                 # Brand icons
│   ├── social/                # Social media icons
│   ├── ui/                    # UI icons
│   └── flags/                 # Country flags
├── assets/                     # Other assets
│   ├── fonts/                 # Custom fonts
│   ├── documents/             # Document files
│   └── videos/                # Video files
└── favicons/                   # Favicon files
```

## 🎨 Design System

### Color Palette
- **Primary**: Silver (#c0c0c0)
- **Secondary**: Light Silver (#e8e8e8)
- **Accent**: Dark Silver (#a0a0a0)
- **Loading Bar**: Pink (#ec4899)

### Typography
- **Primary Font**: Geist Sans
- **Monospace Font**: Geist Mono

### Animations
- **Framework**: Framer Motion
- **Loading Bar**: NextJS TopLoader with pink highlights
- **Transitions**: Smooth, professional animations

## 🚀 Key Features

1. **Modular Architecture**: Well-organized folder structure for scalability
2. **Type Safety**: Comprehensive TypeScript definitions
3. **Modern UI**: Tailwind CSS with custom silver theme
4. **Authentication**: Supabase integration with multiple providers
5. **Animations**: Framer Motion for smooth interactions
6. **State Management**: Zustand for global state
7. **API Management**: React Query for server state
8. **Form Handling**: React Hook Form with validation
9. **Loading States**: TopLoader with pink highlights
10. **Responsive Design**: Mobile-first approach

## 📦 Dependencies

### Core
- Next.js 15.5.3
- React 19.1.0
- TypeScript 5
- Tailwind CSS 4

### UI & Animations
- Framer Motion
- Radix UI components
- Lucide React icons
- NextJS TopLoader

### State & Data
- Zustand
- React Query
- React Hook Form
- Zod validation

### Backend
- Supabase
- @supabase/ssr

### Utilities
- clsx & tailwind-merge
- react-hot-toast

This structure provides a solid foundation for building a scalable, maintainable, and professional web application.
