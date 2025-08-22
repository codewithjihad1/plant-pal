# 🌱 PlantPal

**Your Ultimate Plant Care Companion**

PlantPal is a modern web application built with Next.js 15 that helps plant enthusiasts discover, manage, and care for their plants. Whether you're a beginner or an experienced gardener, PlantPal provides the tools and guidance you need to create a thriving green sanctuary.

## ✨ Features

-   **🏠 Beautiful Landing Page** - Engaging homepage with hero section, product highlights, and footer
-   **🔐 Authentication System** - Secure login/register with NextAuth.js (Google OAuth + Credentials)
-   **🌿 Product Catalog** - Browse plants with advanced filtering, search, and sorting
-   **📱 Responsive Design** - Perfect experience on mobile, tablet, and desktop
-   **🛡️ Protected Routes** - Dashboard access only for authenticated users
-   **➕ Add Products** - Authenticated users can add new plants to the catalog
-   **🌙 Dark Mode Support** - Automatic dark/light theme switching
-   **🎨 Modern UI** - Clean design with Tailwind CSS and smooth animations

## 🚀 Tech Stack

-   **Framework:** Next.js 15 (App Router)
-   **Authentication:** NextAuth.js v4
-   **Styling:** Tailwind CSS v4
-   **Language:** JavaScript/React 19
-   **Icons:** Emoji-based plant representations
-   **Deployment Ready:** Vercel-optimized

## 📁 Project Structure

```
plant-pal/
├── src/
│   ├── app/
│   │   ├── api/auth/[...nextauth]/     # NextAuth.js API routes
│   │   ├── dashboard/add-product/      # Protected add product page
│   │   ├── login/                      # Login page
│   │   ├── register/                   # Registration page
│   │   ├── products/                   # Product listing page
│   │   │   └── [id]/                   # Individual product details
│   │   ├── layout.js                   # Root layout with navbar
│   │   ├── page.js                     # Landing page
│   │   └── globals.css                 # Global styles
│   ├── components/
│   │   ├── Navbar.js                   # Navigation component
│   │   └── AuthProvider.js             # Authentication provider
│   ├── data/
│   │   └── plants.js                   # Mock plant data
│   └── middleware.js                   # Route protection middleware
├── .env.local                          # Environment variables
├── package.json                        # Dependencies
└── README.md                           # Project documentation
```

## 🛠️ Setup & Installation

### Prerequisites

-   **Node.js** 18.17+
-   **npm**, **yarn**, **pnpm**, or **bun**
-   **Git** (for cloning)

### Installation Steps

1. **Clone the repository**

    ```bash
    git clone https://github.com/codewithjihad1/plant-pal.git
    cd plant-pal
    ```

2. **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3. **Set up environment variables**

    Create a `.env.local` file in the root directory:

    ```bash
    # NextAuth.js Configuration
    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_SECRET=your-secret-key-here

    # Google OAuth (Optional - for Google Sign-in)
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    ```

    **To generate a secure NEXTAUTH_SECRET:**

    ```bash
    openssl rand -base64 32
    ```

    **For Google OAuth (Optional):**

    - Go to [Google Cloud Console](https://console.cloud.google.com/)
    - Create a new project or select existing one
    - Enable Google+ API
    - Create OAuth 2.0 credentials
    - Add `http://localhost:3000/api/auth/callback/google` to authorized redirect URIs

4. **Run the development server**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

5. **Open your browser**

    Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🗺️ Route Summary

### Public Routes (No Authentication Required)

| Route            | Description         | Features                                                         |
| ---------------- | ------------------- | ---------------------------------------------------------------- |
| `/`              | **Landing Page**    | Hero section, product highlights, features, testimonials, footer |
| `/products`      | **Product Catalog** | Browse all plants, search, filter, sort functionality            |
| `/products/[id]` | **Product Details** | Individual plant information, care instructions, benefits        |
| `/login`         | **Login Page**      | Sign in with Google OAuth or email/password credentials          |
| `/register`      | **Registration**    | Create new account with Google OAuth or email/password           |

### Protected Routes (Authentication Required)

| Route                    | Description     | Access Control                                                |
| ------------------------ | --------------- | ------------------------------------------------------------- |
| `/dashboard/add-product` | **Add Product** | Authenticated users only, redirects to login if not signed in |

### API Routes

| Route                     | Description     | Method                                              |
| ------------------------- | --------------- | --------------------------------------------------- |
| `/api/auth/[...nextauth]` | **NextAuth.js** | Handles all authentication (login, logout, session) |

## 🔐 Authentication Flow

1. **Login Required** → User tries to access `/dashboard/add-product`
2. **Middleware Check** → Server-side protection via `middleware.js`
3. **Redirect to Login** → Unauthenticated users redirected to `/login`
4. **Authentication** → User signs in with Google OAuth or credentials
5. **Session Created** → NextAuth.js creates secure session
6. **Access Granted** → User can now access protected dashboard

### Demo Credentials

For testing purposes, you can use these demo credentials:

-   **Email:** `demo@plantpal.com`
-   **Password:** `password123`

Or use any email/password combination (demo mode accepts all credentials).

## 📊 Demo Data

The application includes 10 sample plants with complete information:

-   **Monstera Deliciosa** - Instagram-famous Swiss Cheese Plant
-   **Snake Plant** - Nearly indestructible air purifier
-   **Fiddle Leaf Fig** - Elegant statement plant
-   **Pothos** - Ultimate beginner-friendly trailing plant
-   **Peace Lily** - Elegant flowering houseplant
-   **Rubber Plant** - Bold architectural beauty
-   **Spider Plant** - Fun, baby-producing hanging plant
-   **ZZ Plant** - Extremely drought-tolerant glossy plant
-   **Aloe Vera** - Medicinal succulent with healing properties
-   **Boston Fern** - Lush, tropical hanging fern

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub** (if not already done)
2. **Import to Vercel**
    - Go to [vercel.com](https://vercel.com)
    - Click "Import Project"
    - Select your GitHub repository
3. **Configure Environment Variables**
    - Add all variables from `.env.local`
    - Update `NEXTAUTH_URL` to your production domain
4. **Deploy** - Vercel will automatically build and deploy

### Other Deployment Options

-   **Netlify:** Connect GitHub repo and deploy
-   **Railway:** Easy Node.js deployment
-   **Digital Ocean:** App Platform deployment
-   **Self-hosted:** Build and serve with `npm run build && npm start`

## 🛡️ Security Features

-   **NextAuth.js Integration** - Industry-standard authentication
-   **Route Protection** - Middleware-based access control
-   **Session Management** - Secure JWT-based sessions
-   **CSRF Protection** - Built-in cross-site request forgery protection
-   **Environment Variables** - Sensitive data properly secured

## 🎨 UI/UX Features

-   **Responsive Design** - Mobile-first approach
-   **Dark Mode** - Automatic system preference detection
-   **Loading States** - Smooth loading indicators
-   **Error Handling** - User-friendly error messages
-   **Animations** - Subtle hover effects and transitions
-   **Accessibility** - Proper ARIA labels and keyboard navigation

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Adding New Plants

1. Navigate to `/dashboard/add-product` (requires login)
2. Fill out the comprehensive plant form
3. Add care instructions and benefits
4. Submit to add to catalog

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Jihad Hossain**

-   GitHub: [@codewithjihad1](https://github.com/codewithjihad1)

## 🙏 Acknowledgments

-   **Next.js Team** - For the amazing React framework
-   **NextAuth.js** - For simplified authentication
-   **Tailwind CSS** - For utility-first styling
-   **Vercel** - For seamless deployment platform

---

**Happy Gardening with PlantPal! 🌱**
