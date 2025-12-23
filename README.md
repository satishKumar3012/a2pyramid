# A2 Pyramid - Corporate EdTech Platform

![A2 Pyramid Logo](public/logo.png)

## 🚀 Overview

A2 Pyramid is India's leading AI-powered education and EdTech platform, built with modern web technologies and corporate-level architecture. This platform connects teachers with students, provides smart automation solutions, and delivers comprehensive learning management systems.

## ✨ Features

### 🎯 Core Features
- **AI-Powered Learning**: Smart classroom solutions with personalized learning paths
- **Teacher-Student Matching**: Advanced algorithm to connect qualified teachers with students
- **Multi-Platform Integration**: Seamless integration across web, mobile, and desktop
- **Real-time Analytics**: Comprehensive dashboard with learning insights
- **Automated Assessment**: AI-driven evaluation and feedback systems

### 🛠 Technical Features
- **Modern React Architecture**: Built with React 19, TypeScript, and Vite
- **Professional UI/UX**: Corporate-level design with Tailwind CSS and Framer Motion
- **State Management**: Context API with reducer pattern for scalable state management
- **Performance Optimized**: Code splitting, lazy loading, and optimized bundle sizes
- **Accessibility First**: WCAG 2.1 AA compliant with comprehensive keyboard navigation
- **Responsive Design**: Mobile-first approach with seamless cross-device experience
- **Dark Mode Support**: System preference detection with manual toggle
- **Error Handling**: Comprehensive error boundaries and user-friendly error messages
- **Type Safety**: Full TypeScript implementation with strict type checking

## 🏗 Architecture

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Button, Card, Input, etc.)
│   ├── forms/          # Form components with validation
│   └── [feature]/      # Feature-specific components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── context/            # React Context providers
├── services/           # API services and external integrations
├── utils/              # Utility functions and helpers
├── types/              # TypeScript type definitions
├── constants/          # Application constants and configuration
└── assets/             # Static assets
```

### Technology Stack
- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, CSS Modules
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives
- **Build Tool**: Vite with optimized configuration

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/a2pyramid/a2-pyramid-platform.git
   cd a2-pyramid-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Type checking
npm run type-check   # Run TypeScript compiler check
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#0066cc) - Trust, professionalism, technology
- **Secondary**: Orange (#f97316) - Energy, creativity, innovation
- **Accent**: Indigo (#6366f1) - Premium, sophistication
- **Success**: Green (#059669) - Achievement, growth
- **Warning**: Amber (#d97706) - Attention, caution
- **Error**: Red (#dc2626) - Issues, alerts

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: 700-900 weight
- **Body**: 400-600 weight
- **Scale**: Modular scale with responsive sizing

### Components
All components follow atomic design principles:
- **Atoms**: Button, Input, Icon
- **Molecules**: Card, Form Field, Navigation Item
- **Organisms**: Header, Footer, Contact Form
- **Templates**: Page layouts
- **Pages**: Complete page implementations

## 🔧 Configuration

### Environment Variables
```env
# API Configuration
VITE_API_BASE_URL=https://api.a2pyramid.com
VITE_APP_ENV=development

# Analytics
VITE_GA_TRACKING_ID=your_ga_id
VITE_HOTJAR_ID=your_hotjar_id

# Social Media
VITE_WHATSAPP_NUMBER=+91XXXXXXXXXX
VITE_SUPPORT_EMAIL=support@a2pyramid.com

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_CHATBOT=true
VITE_ENABLE_NOTIFICATIONS=true
```

### Tailwind Configuration
Custom configuration includes:
- Extended color palette
- Custom animations and transitions
- Responsive breakpoints
- Dark mode support
- Custom utility classes

## 📱 Responsive Design

### Breakpoints
- **xs**: 475px (Extra small devices)
- **sm**: 640px (Small devices)
- **md**: 768px (Medium devices)
- **lg**: 1024px (Large devices)
- **xl**: 1280px (Extra large devices)
- **2xl**: 1536px (2X large devices)

### Mobile-First Approach
All components are designed mobile-first with progressive enhancement for larger screens.

## ♿ Accessibility

### WCAG 2.1 AA Compliance
- Semantic HTML structure
- Proper ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management
- Skip links for navigation

### Testing
- Automated accessibility testing with axe-core
- Manual testing with screen readers
- Keyboard-only navigation testing

## 🚀 Performance

### Optimization Strategies
- **Code Splitting**: Route-based and component-based splitting
- **Lazy Loading**: Images and components loaded on demand
- **Bundle Optimization**: Tree shaking and dead code elimination
- **Caching**: Service worker implementation for offline support
- **Image Optimization**: WebP format with fallbacks
- **Font Loading**: Optimized web font loading strategy

### Performance Metrics
- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

## 🔒 Security

### Security Measures
- Input validation and sanitization
- XSS protection
- CSRF protection
- Secure headers implementation
- Environment variable protection
- Dependency vulnerability scanning

## 🧪 Testing

### Testing Strategy
- **Unit Tests**: Component and utility function testing
- **Integration Tests**: API integration and user flow testing
- **E2E Tests**: Complete user journey testing
- **Accessibility Tests**: Automated and manual accessibility testing

## 📈 Analytics & Monitoring

### Integrated Analytics
- Google Analytics 4
- Hotjar for user behavior analysis
- Custom event tracking
- Performance monitoring
- Error tracking and reporting

## 🌐 Deployment

### Production Build
```bash
npm run build
```

### Deployment Options
- **Vercel**: Recommended for optimal performance
- **Netlify**: Alternative with great DX
- **AWS S3 + CloudFront**: Enterprise-grade hosting
- **Docker**: Containerized deployment

### CI/CD Pipeline
- Automated testing on pull requests
- Build optimization and validation
- Automated deployment to staging/production
- Performance regression testing

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

### Code Standards
- ESLint configuration for code quality
- Prettier for code formatting
- Conventional commits for commit messages
- TypeScript strict mode enabled

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

### Contact Information
- **Email**: support@a2pyramid.com
- **Phone**: +91-XXXXXXXXXX
- **Website**: https://a2pyramid.com
- **Documentation**: https://docs.a2pyramid.com

### Community
- **GitHub Issues**: Bug reports and feature requests
- **Discussions**: Community discussions and Q&A
- **Discord**: Real-time community chat

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations
- Lucide for beautiful icons
- All contributors and community members

---

**Built with ❤️ by A2 Pyramid Technologies**

*Transforming education through technology*
