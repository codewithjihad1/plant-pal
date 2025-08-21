import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@email.com",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(credentials) {
                // For demo purposes, we'll use hardcoded credentials
                // In a real app, you'd validate against a database
                if (
                    credentials?.email === "demo@plantpal.com" &&
                    credentials?.password === "password123"
                ) {
                    return {
                        id: "1",
                        email: "demo@plantpal.com",
                        name: "Demo User",
                        image: null,
                    };
                }

                // You can also create new users here if needed
                if (credentials?.email && credentials?.password) {
                    // For demo, accept any email/password combination
                    return {
                        id: Math.random().toString(),
                        email: credentials.email,
                        name: credentials.email.split("@")[0],
                        image: null,
                    };
                }

                return null;
            },
        }),
    ],
    pages: {
        signIn: "/login",
        error: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
            }
            return session;
        },
        async redirect({ url, baseUrl }) {
            // Redirect to /products after successful login
            if (url === "/login" || url === baseUrl + "/login") {
                return baseUrl + "/products";
            }
            // Allows relative callback URLs
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            // Allows callback URLs on the same origin
            if (new URL(url).origin === baseUrl) return url;
            return baseUrl + "/products";
        },
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET || "your-secret-key-for-development",
});

export { handler as GET, handler as POST };
