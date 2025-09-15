# 💎 Silver Dust Jewelry

A modern, elegant jewelry shop website built with Next.js 15, TypeScript, and Tailwind CSS. Features a beautiful pink and white color scheme with glass morphism effects and responsive design.

![Silver Dust Jewelry](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Modern Design**: Clean, elegant pink and white color scheme
- 📱 **Fully Responsive**: Works perfectly on all devices
- ⚡ **Fast Performance**: Built with Next.js 15 and Turbopack
- 🎭 **Glass Morphism**: Beautiful glass effects with subtle shadows
- 🛍️ **E-commerce Ready**: Shopping cart and product showcase
- 🎯 **SEO Optimized**: Built-in SEO features
- 🌙 **Dark Mode Support**: Automatic dark/light mode detection
- 🎪 **Component Architecture**: Modular, reusable components

## 🏗️ Project Structure

```
silver-dust/
├── src/
│   ├── app/                    # Next.js 15 app directory
│   │   ├── globals.css        # Global styles and CSS variables
│   │   ├── layout.tsx         # Root layout component
│   │   └── page.tsx           # Homepage
│   ├── components/            # Reusable components
│   │   ├── features/          # Feature-specific components
│   │   │   └── home/          # Homepage sections
│   │   └── layout/            # Layout components
│   │       ├── navigation/    # Navbar component
│   │       └── footer/        # Footer component
│   ├── lib/                   # Utility functions and configurations
│   ├── types/                 # TypeScript type definitions
│   └── constants/             # App constants and configurations
├── public/                    # Static assets
├── tailwind.config.js         # Tailwind CSS configuration
└── package.json               # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mortiestmorty1/silver-dust.git
   cd silver-dust
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   Edit `.env.local` with your configuration values.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

### Color Palette
- **Primary Pink**: `#f8bbd9` - Main brand color
- **Light Pink**: `#fef7f7` - Subtle backgrounds
- **Dark Pink**: `#d946ef` - Accent and hover states
- **Accent Pink**: `#f0a6d3` - Secondary accents
- **White**: `#ffffff` - Primary background

### Typography
- **Primary Font**: Geist Sans
- **Monospace Font**: Geist Mono

### Components
- **Glass Effect**: Subtle transparency with backdrop blur
- **Gradient Text**: Beautiful gradient text effects
- **Hover Animations**: Smooth transitions and transforms

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: Heroicons (SVG)
- **Fonts**: [Geist Font Family](https://vercel.com/font)
- **Development**: Turbopack for fast builds

## 📱 Pages & Sections

### Homepage Sections
- **Hero Section**: Eye-catching introduction with call-to-action
- **Featured Products**: Showcase of jewelry collections
- **About Section**: Company story and craftsmanship
- **Testimonials**: Customer reviews and ratings
- **Call-to-Action**: Contact and consultation prompts

### Navigation
- **Desktop**: Horizontal navigation with centered menu
- **Mobile**: Collapsible hamburger menu
- **Shopping Cart**: Icon with item counter

## 🎯 Features in Detail

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Touch-friendly interactions

### Performance
- Next.js 15 with Turbopack
- Optimized images and assets
- Fast page loads
- SEO optimization

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
- **Netlify**: Connect GitHub repository
- **AWS Amplify**: Deploy with CI/CD
- **Railway**: Simple deployment platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Developer**: [Your Name](https://github.com/yourusername)
- **Design**: Custom design system
- **Icons**: Heroicons

## 📞 Support

- **Email**: support@silverdustjewelry.com
- **GitHub Issues**: [Create an issue](https://github.com/mortiestmorty1/silver-dust/issues)
- **Documentation**: [Wiki](https://github.com/mortiestmorty1/silver-dust/wiki)

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Vercel](https://vercel.com/) for hosting and deployment
- [Heroicons](https://heroicons.com/) for beautiful SVG icons

---

**Made with ❤️ for jewelry lovers everywhere**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mortiestmorty1/silver-dust)