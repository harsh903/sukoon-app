# Sukoon - Mental Health Journey Platform

Sukoon is a modern web application that provides AI-powered mental health support, mood tracking, and community features. Built with Next.js, Tailwind CSS, and integrated with Clerk for authentication.

## 🌟 Features

- **AI Counselor**: 24/7 support from our trained AI counselor
- **Mood Tracking**: Interactive visualization of emotional patterns
- **Community Support**: Safe space for connecting with peers
- **User Authentication**: Secure login and registration with Clerk
- **Responsive Design**: Fully responsive UI for all devices
- **Protected Routes**: Secure access to authenticated features

## 🛠 Tech Stack

- **Frontend Framework**: Next.js 14
- **Styling**: Tailwind CSS with custom configuration
- **Authentication**: Clerk
- **Icons**: Lucide React
- **UI Components**: Custom components with shadcn/ui
- **Type Safety**: TypeScript
- **Code Quality**: ESLint, Prettier

## 📁 Project Structure

```
mindfulpath/
├── .next/               # Next.js build output
├── node_modules/        # Project dependencies
├── public/             # Static assets
├── src/                # Source code
│   └── app/           # Next.js app directory
│       ├── dashboard/  # Dashboard pages
│       ├── components/ # Reusable components
│       ├── globals.css # Global styles
│       ├── layout.tsx  # Root layout
│       └── page.tsx    # Home page
├── .env.local          # Environment variables
├── .gitignore         # Git ignore rules
├── package.json       # Project configuration
├── postcss.config.js  # PostCSS configuration
├── tailwind.config.ts # Tailwind configuration
└── tsconfig.json     # TypeScript configuration
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mindfulpath.git
   cd mindfulpath
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔒 Environment Variables

The following environment variables are required:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk publishable key
- `CLERK_SECRET_KEY`: Clerk secret key

## 📦 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build production application
- `npm start`: Start production server
- `npm run lint`: Run ESLint
- `npm run type-check`: Run TypeScript checks

## 🌿 Project Features

### Authentication
- Protected routes with Clerk
- User profile management
- Secure session handling

### Dashboard
- Overview of mental health metrics
- Quick access to key features
- Recent activity tracking

### AI Counselor
- Real-time chat interface
- Natural language processing
- Emotional support and guidance

### Mood Tracking
- Interactive mood logging
- Pattern visualization
- Progress tracking

### Community
- Safe discussion spaces
- Peer support system
- Moderated interactions

## 👥 Team

- Aakashdeep Srivastava - AI Developer
- Harsh Singh - ML Engineer
- Suchi Bansal - Product Manager

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Clerk for authentication
- Tailwind CSS for styling
- Lucide for icons
- Next.js team for the amazing framework