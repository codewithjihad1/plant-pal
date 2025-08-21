import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Hero Text */}
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                                Grow with{" "}
                                <span className="text-green-600 dark:text-green-400">
                                    PlantPal
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                                Your ultimate plant care companion. Discover,
                                manage, and nurture your perfect plants with
                                expert guidance, smart tools, and a thriving
                                community.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    href="/products"
                                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    🌱 Explore Plants
                                </Link>
                                <Link
                                    href="/login"
                                    className="border-2 border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                                >
                                    Get Started Free
                                </Link>
                            </div>

                            {/* Stats */}
                            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                                        500+
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        Plant Varieties
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                                        10K+
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        Happy Gardeners
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                                        95%
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">
                                        Success Rate
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image/Visual */}
                        <div className="relative">
                            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center">
                                    <div className="text-8xl mb-4">🌿</div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        Smart Plant Care
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        AI-powered recommendations for optimal
                                        plant health
                                    </p>
                                </div>
                            </div>

                            {/* Floating cards */}
                            <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl">💧</span>
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Water reminder
                                    </span>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl">☀️</span>
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Perfect light
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Why Choose PlantPal?
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Everything you need to become a successful plant
                            parent, all in one place
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <div className="text-5xl mb-4">🤖</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                Smart Care Assistant
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Get personalized care schedules and reminders
                                based on your plants&apos; specific needs
                            </p>
                        </div>

                        <div className="text-center p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <div className="text-5xl mb-4">📱</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                Plant Identification
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Snap a photo to instantly identify plants and
                                get detailed care instructions
                            </p>
                        </div>

                        <div className="text-center p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            <div className="text-5xl mb-4">🌱</div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                Growth Tracking
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Monitor your plants&apos; progress with photos
                                and notes to celebrate their journey
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Highlights Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Featured Plants
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Discover our most popular plants, carefully selected
                            for their beauty and ease of care
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {/* Enhanced product cards with more details */}
                        {[
                            {
                                id: 1,
                                name: "Monstera Deliciosa",
                                emoji: "🌿",
                                description:
                                    "The Instagram-famous Swiss Cheese Plant. Perfect for beginners with its distinctive split leaves.",
                                price: "$34.99",
                                difficulty: "Easy",
                                light: "Bright, indirect light",
                                care: "Water weekly",
                            },
                            {
                                id: 2,
                                name: "Snake Plant",
                                emoji: "🐍",
                                description:
                                    "Nearly indestructible and air-purifying. Great for low-light spaces and busy plant parents.",
                                price: "$24.99",
                                difficulty: "Very Easy",
                                light: "Low to bright light",
                                care: "Water monthly",
                            },
                            {
                                id: 3,
                                name: "Fiddle Leaf Fig",
                                emoji: "🌳",
                                description:
                                    "The statement plant that adds elegance to any room. A bit more care but worth the effort.",
                                price: "$49.99",
                                difficulty: "Intermediate",
                                light: "Bright, indirect light",
                                care: "Water when dry",
                            },
                        ].map((plant) => (
                            <div
                                key={plant.id}
                                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                            >
                                <div className="h-56 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 flex items-center justify-center relative overflow-hidden">
                                    <span className="text-8xl group-hover:scale-110 transition-transform duration-300">
                                        {plant.emoji}
                                    </span>
                                    <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-medium text-green-600 dark:text-green-400">
                                        {plant.difficulty}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {plant.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                                        {plant.description}
                                    </p>

                                    {/* Care info */}
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                            <span className="mr-2">☀️</span>
                                            {plant.light}
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                            <span className="mr-2">💧</span>
                                            {plant.care}
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                                            {plant.price}
                                        </span>
                                        <Link
                                            href={`/products/${plant.id}`}
                                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition-colors"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA to view all products */}
                    <div className="text-center">
                        <Link
                            href="/products"
                            className="inline-flex items-center bg-white dark:bg-gray-800 border-2 border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 px-8 py-3 rounded-lg font-semibold transition-colors"
                        >
                            View All Plants
                            <span className="ml-2">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            What Plant Parents Say
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Join thousands of happy gardeners who transformed
                            their homes
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sarah Johnson",
                                role: "Plant Enthusiast",
                                content:
                                    "PlantPal helped me transform my apartment into a green oasis. The care reminders are a lifesaver!",
                                rating: 5,
                            },
                            {
                                name: "Mike Chen",
                                role: "Busy Professional",
                                content:
                                    "Finally, plants that survive my hectic schedule. The app knows exactly when to remind me to water.",
                                rating: 5,
                            },
                            {
                                name: "Emma Davis",
                                role: "New Plant Parent",
                                content:
                                    "I killed every plant I touched until PlantPal. Now my home is full of thriving greenery!",
                                rating: 5,
                            },
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map(
                                        (_, i) => (
                                            <span
                                                key={i}
                                                className="text-yellow-400 text-xl"
                                            >
                                                ⭐
                                            </span>
                                        )
                                    )}
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                                    &quot;{testimonial.content}&quot;
                                </p>
                                <div>
                                    <div className="font-semibold text-gray-900 dark:text-white">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Ready to Start Your Plant Journey?
                    </h2>
                    <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of plant lovers and transform your space
                        into a green paradise. Start your free account today!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/login"
                            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                        >
                            Get Started Free
                        </Link>
                        <Link
                            href="/products"
                            className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                        >
                            Browse Plants
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        {/* Brand Section */}
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center mb-6">
                                <span className="text-3xl font-bold text-green-400">
                                    🌱 PlantPal
                                </span>
                            </div>
                            <p className="text-gray-400 mb-6 max-w-md">
                                Your trusted companion for plant care and
                                gardening. We help you grow beautiful, healthy
                                plants and create the perfect green sanctuary in
                                your home.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-green-400 transition-colors"
                                >
                                    <span className="sr-only">Facebook</span>
                                    <span className="text-2xl">📘</span>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-green-400 transition-colors"
                                >
                                    <span className="sr-only">Twitter</span>
                                    <span className="text-2xl">🐦</span>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-green-400 transition-colors"
                                >
                                    <span className="sr-only">Instagram</span>
                                    <span className="text-2xl">📷</span>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-green-400 transition-colors"
                                >
                                    <span className="sr-only">YouTube</span>
                                    <span className="text-2xl">📺</span>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6 text-green-400">
                                Quick Links
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-gray-400 hover:text-white transition-colors flex items-center"
                                    >
                                        <span className="mr-2">🏠</span>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/products"
                                        className="text-gray-400 hover:text-white transition-colors flex items-center"
                                    >
                                        <span className="mr-2">🌿</span>
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/login"
                                        className="text-gray-400 hover:text-white transition-colors flex items-center"
                                    >
                                        <span className="mr-2">🔐</span>
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/dashboard/add-product"
                                        className="text-gray-400 hover:text-white transition-colors flex items-center"
                                    >
                                        <span className="mr-2">➕</span>
                                        Add Plant
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Support & Resources */}
                        <div>
                            <h3 className="text-lg font-semibold mb-6 text-green-400">
                                Support & Resources
                            </h3>
                            <ul className="space-y-3">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors flex items-center"
                                    >
                                        <span className="mr-2">❓</span>
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors flex items-center"
                                    >
                                        <span className="mr-2">📞</span>
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors flex items-center"
                                    >
                                        <span className="mr-2">📚</span>
                                        Plant Care Guide
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white transition-colors flex items-center"
                                    >
                                        <span className="mr-2">🌱</span>
                                        Plant Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="border-t border-gray-800 pt-8 mb-8">
                        <div className="max-w-md mx-auto text-center">
                            <h3 className="text-xl font-semibold mb-4 text-green-400">
                                🌿 Stay Green & Informed
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Get weekly plant care tips and exclusive offers
                                delivered to your inbox.
                            </p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                                />
                                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-center md:text-left">
                            © 2025 PlantPal. All rights reserved. Made with 💚
                            for plant lovers.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors text-sm"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors text-sm"
                            >
                                Terms of Service
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors text-sm"
                            >
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
