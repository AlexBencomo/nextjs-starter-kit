# Next.js SaaS Starter Kit 2.0

A comprehensive, production-ready SaaS starter kit built with Next.js 15, featuring authentication, subscriptions, AI integration, and modern UI components.

## ✨ Features

### 🔐 Authentication & User Management
- **Better Auth v1.2.8** - Modern authentication system
- Google OAuth integration
- Session management with database persistence
- User profile management with image uploads
- Account linking for multiple providers

### 💳 Subscription & Billing
- **Polar.sh** integration for subscription management
- Two-tier pricing: Starter ($99/month) & Professional ($499/month)
- Real-time webhook processing
- Customer portal for self-service billing
- Subscription status tracking (active, canceled, expired)
- Payment gating with elegant overlays

### 🤖 AI Integration
- **OpenAI** powered chatbot
- React Markdown rendering for rich responses
- Multi-step conversation support
- Integrated chat widget in dashboard

### 🎨 Modern UI/UX
- **Tailwind CSS v4** - Latest utility-first styling
- **shadcn/ui** components - Accessible, customizable
- **Radix UI** primitives - Unstyled, accessible components
- Dark/light theme support with smooth transitions
- Responsive design with mobile-first approach
- Loading skeletons and optimistic UI updates

### 🗄️ Database & Storage
- **Neon PostgreSQL** - Serverless database
- **Drizzle ORM** - Type-safe database toolkit
- **Cloudflare R2** - Scalable file storage
- Database migrations with Drizzle Kit

### 📊 Analytics & Monitoring
- **PostHog** integration for product analytics
- User behavior tracking
- Custom event monitoring
- Error tracking and insights

## 🚀 Tech Stack

- **Framework**: Next.js 15.3.1 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Database**: Neon PostgreSQL + Drizzle ORM
- **Authentication**: Better Auth v1.2.8
- **Payments**: Polar.sh
- **AI**: OpenAI SDK
- **Storage**: Cloudflare R2
- **Analytics**: PostHog
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
├── app/
│   ├── (auth)/              # Authentication pages
│   ├── dashboard/           # Protected dashboard area
│   │   ├── _components/     # Dashboard components
│   │   ├── chat/           # AI chat interface
│   │   ├── payment/        # Subscription management
│   │   └── settings/       # User settings & billing
│   ├── pricing/            # Public pricing page
│   └── api/                # API routes
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── homepage/           # Landing page sections
├── lib/
│   ├── auth/              # Authentication config
│   ├── subscription.ts    # Subscription utilities
│   └── r2.ts             # File storage config
└── db/
    ├── schema.ts          # Database schema
    └── drizzle.ts         # Database connection
```

## 🛠️ Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database (Neon recommended)
- Cloudflare R2 bucket
- Polar.sh account
- OpenAI API key

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd next-starter-2.0
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Setup**
Create a `.env.local` file with:
```env
# Database
DATABASE_URL="your-neon-database-url"

# Authentication
BETTER_AUTH_SECRET="your-secret-key"
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Polar.sh
POLAR_ACCESS_TOKEN="your-polar-access-token"
POLAR_WEBHOOK_SECRET="your-webhook-secret"

# OpenAI
OPENAI_API_KEY="your-openai-api-key"

# Cloudflare R2
R2_ACCOUNT_ID="your-r2-account-id"
R2_ACCESS_KEY_ID="your-access-key"
R2_SECRET_ACCESS_KEY="your-secret-key"
R2_BUCKET_NAME="your-bucket-name"

# PostHog
NEXT_PUBLIC_POSTHOG_KEY="your-posthog-key"
NEXT_PUBLIC_POSTHOG_HOST="https://app.posthog.com"
```

4. **Database Setup**
```bash
# Generate and run migrations
npx drizzle-kit generate
npx drizzle-kit push
```

5. **Start Development Server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## 🎯 Key Features Explained

### Subscription Management
- Automatic subscription status checking
- Payment gating for premium features
- Integration with Polar.sh customer portal
- Webhook handling for real-time updates

### AI Chat Integration
- Built-in chatbot with OpenAI
- Markdown rendering for rich responses
- Conversation history and context

### File Upload System
- Cloudflare R2 integration
- Image optimization and validation
- Secure upload handling

### Analytics & Tracking
- PostHog event tracking
- User behavior monitoring
- Custom analytics dashboard

## 🔧 Customization

### Adding New Features
1. Create components in `components/`
2. Add API routes in `app/api/`
3. Update database schema in `db/schema.ts`
4. Run `npx drizzle-kit generate` and `npx drizzle-kit push`

### Styling
- Modify `app/globals.css` for global styles
- Use Tailwind classes for component styling
- Customize theme in `tailwind.config.ts`

### Authentication
- Configure providers in `lib/auth/auth.ts`
- Add new OAuth providers as needed
- Customize user profile fields in database schema

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Better Auth Documentation](https://better-auth.com)
- [Polar.sh Documentation](https://docs.polar.sh)
- [Drizzle ORM Documentation](https://orm.drizzle.team)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on every push

### Manual Deployment
```bash
npm run build
npm start
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Next.js and modern web technologies.
