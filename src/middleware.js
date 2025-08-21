import { withAuth } from "next-auth/middleware";

export default withAuth(
    function middleware(req) {
        // Add any additional middleware logic here if needed
    },
    {
        callbacks: {
            authorized: ({ token, req }) => {
                // Check if user is trying to access protected routes
                if (req.nextUrl.pathname.startsWith("/dashboard")) {
                    return !!token; // Require authentication for dashboard routes
                }
                return true; // Allow access to other routes
            },
        },
    }
);

export const config = {
    matcher: ["/dashboard/:path*"],
};
