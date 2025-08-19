# Financial Dashboard

> Modern financial control dashboard built with React, TypeScript, Vite, and TailwindCSS.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/vite-%5E4.0.0-646CFF.svg)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-%5E18.2.0-61DAFB.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/typescript-%5E5.0.0-3178C6.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%5E3.3.0-06B6D4.svg)](https://tailwindcss.com/)

## 🚀 Features

- 📊 Interactive financial dashboards with real-time data
- 📈 Beautiful charts and visualizations
- 🔍 Advanced filtering and search capabilities
- 🌓 Light and dark mode support
- 📱 Fully responsive design
- ⚡ Blazing fast performance with Vite
- 🔒 Secure authentication (optional)
- 📱 PWA support (offline capabilities)

## 🛠 Tech Stack

- **Frontend Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite 4](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Radix UI](https://www.radix-ui.com/)
- **State Management**: [TanStack Query](https://tanstack.com/query/latest)
- **Routing**: [React Router 6](https://reactrouter.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Date Utilities**: [date-fns](https://date-fns.org/)
- **Type Checking**: [TypeScript](https://www.typescriptlang.org/)
- **Linting**: [ESLint](https://eslint.org/)
- **Formatting**: [Prettier](https://prettier.io/)
- **Email**: [Nodemailer](https://nodemailer.com/)

## 📦 Prerequisites

- Node.js 18 or higher
- npm 9 or higher (or yarn/pnpm)
- Git

## ✉️ Email Notifications

The application includes a feature to send financial reports via email using Gmail SMTP.

### Setup Email Notifications

1. **Enable 2-Step Verification** on your Google Account:
   - Go to your [Google Account Security](https://myaccount.google.com/security)
   - Under "Signing in to Google," select **2-Step Verification**
   - Follow the setup steps

2. **Generate an App Password**:
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Other (Custom name)" as the app
   - Enter a name (e.g., "Financial Dashboard")
   - Click "Generate" and copy the 16-character password

3. **Configure Environment Variables**:
   - Copy `.env.example` to `.env`
   - Update the following variables:
     ```
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-16-character-app-password
     ```

4. **Start the Server**:
   ```bash
   # In a new terminal
   npm run server
   ```

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/PedroM2626/Financial-Dashboard.git
cd Financial-Dashboard
```

### 2. Install dependencies

```bash
npm install
# or
yarn
# or
pnpm install
```

### 3. Set up environment variables

Copy the example environment file and update the values:

```bash
cp .env.example .env
```

Edit the `.env` file with your configuration:

```env
# App
VITE_APP_TITLE="Financial Dashboard"
VITE_APP_DESCRIPTION="A modern financial dashboard"

# API (optional)
VITE_API_BASE_URL=http://localhost:3000/api

# Supabase (optional)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Feature flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_PWA=false
```

### 4. Start the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗 Project Structure

```
financial-dashboard/
├── public/                # Static files
│   ├── assets/            # Images, fonts, etc.
│   └── favicon.ico        # Favicon
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── dashboard/     # Dashboard specific components
│   │   └── ui/            # Base UI components
│   ├── config/            # App configuration
│   ├── contexts/          # React contexts
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components
│   ├── providers/         # Context providers
│   ├── services/          # API services
│   ├── stores/            # State management
│   ├── styles/            # Global styles
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Helper functions
│   ├── App.tsx            # Main App component
│   └── main.tsx           # Application entry point
├── .env.example           # Example environment variables
├── .eslintrc.js           # ESLint configuration
├── .gitignore            # Git ignore file
├── index.html            # HTML template
├── package.json          # Project dependencies
├── postcss.config.js     # PostCSS configuration
├── README.md             # This file
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🛠 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Check TypeScript types
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report

## 🔧 Configuration

### Environment Variables

See `.env.example` for all available environment variables.

### Tailwind CSS

Edit `tailwind.config.js` to customize your design system.

### Vite

Edit `vite.config.ts` to customize the build process.

## 📚 Documentation

- [Component Documentation](./docs/COMPONENTS.md)
- [API Documentation](./docs/API.md)
- [Deployment Guide](./docs/DEPLOYMENT.md)
- [Testing Guide](./docs/TESTING.md)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the amazing build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives
- [Recharts](https://recharts.org/) for beautiful charts
- And all the other amazing open source projects that made this possible

---

Made with ❤️ by [PedroM2626](https://github.com/PedroM2626)
