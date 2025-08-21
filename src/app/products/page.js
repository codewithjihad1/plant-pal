"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
    plantsData,
    categories,
    difficulties,
    sortOptions,
} from "@/data/plants";

export default function ProductsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedDifficulty, setSelectedDifficulty] = useState("All");
    const [sortBy, setSortBy] = useState("name");
    const [showFilters, setShowFilters] = useState(false);

    // Filter and sort products
    const filteredAndSortedProducts = useMemo(() => {
        let filtered = plantsData.filter((plant) => {
            const matchesSearch =
                plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                plant.description
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase());
            const matchesCategory =
                selectedCategory === "All" ||
                plant.category === selectedCategory;
            const matchesDifficulty =
                selectedDifficulty === "All" ||
                plant.difficulty === selectedDifficulty;

            return matchesSearch && matchesCategory && matchesDifficulty;
        });

        // Sort products
        filtered.sort((a, b) => {
            switch (sortBy) {
                case "name":
                    return a.name.localeCompare(b.name);
                case "price-low":
                    return a.price - b.price;
                case "price-high":
                    return b.price - a.price;
                case "difficulty":
                    const difficultyOrder = [
                        "Very Easy",
                        "Easy",
                        "Intermediate",
                        "Hard",
                    ];
                    return (
                        difficultyOrder.indexOf(a.difficulty) -
                        difficultyOrder.indexOf(b.difficulty)
                    );
                default:
                    return 0;
            }
        });

        return filtered;
    }, [searchQuery, selectedCategory, selectedDifficulty, sortBy]);

    const clearFilters = () => {
        setSearchQuery("");
        setSelectedCategory("All");
        setSelectedDifficulty("All");
        setSortBy("name");
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            🌱 Discover Your Perfect Plants
                        </h1>
                        <p className="text-xl text-green-100 max-w-2xl mx-auto">
                            Browse our carefully curated collection of plants,
                            from beginner-friendly to rare finds. Each plant
                            comes with detailed care instructions to help you
                            succeed.
                        </p>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Search and Filters Bar */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
                    {/* Search Bar */}
                    <div className="mb-6">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for plants..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white text-lg"
                            />
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg
                                    className="h-5 w-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Filter Toggle Button (Mobile) */}
                    <div className="md:hidden mb-4">
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
                                />
                            </svg>
                            {showFilters ? "Hide Filters" : "Show Filters"}
                        </button>
                    </div>

                    {/* Filters */}
                    <div
                        className={`${
                            showFilters ? "block" : "hidden"
                        } md:block`}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {/* Category Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Category
                                </label>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) =>
                                        setSelectedCategory(e.target.value)
                                    }
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                                >
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Difficulty Filter */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Difficulty
                                </label>
                                <select
                                    value={selectedDifficulty}
                                    onChange={(e) =>
                                        setSelectedDifficulty(e.target.value)
                                    }
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                                >
                                    {difficulties.map((difficulty) => (
                                        <option
                                            key={difficulty}
                                            value={difficulty}
                                        >
                                            {difficulty}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Sort By */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Sort By
                                </label>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                                >
                                    {sortOptions.map((option) => (
                                        <option
                                            key={option.value}
                                            value={option.value}
                                        >
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Clear Filters */}
                            <div className="flex items-end">
                                <button
                                    onClick={clearFilters}
                                    className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Results Summary */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {searchQuery
                                ? `Search Results for "${searchQuery}"`
                                : "All Plants"}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Showing {filteredAndSortedProducts.length} of{" "}
                            {plantsData.length} plants
                        </p>
                    </div>
                </div>

                {/* Products Grid */}
                {filteredAndSortedProducts.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            No plants found
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Try adjusting your search or filters to find what
                            you&apos;re looking for.
                        </p>
                        <button
                            onClick={clearFilters}
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            Clear All Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredAndSortedProducts.map((plant) => (
                            <div
                                key={plant.id}
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                            >
                                {/* Plant Image */}
                                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 flex items-center justify-center relative overflow-hidden">
                                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                                        {plant.image}
                                    </span>

                                    {/* Stock Status */}
                                    {!plant.inStock && (
                                        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                            Out of Stock
                                        </div>
                                    )}

                                    {/* Featured Badge */}
                                    {plant.featured && (
                                        <div className="absolute top-3 right-3 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                            ⭐ Featured
                                        </div>
                                    )}

                                    {/* Difficulty Badge */}
                                    <div className="absolute bottom-3 right-3 bg-white dark:bg-gray-800 rounded-full px-3 py-1 text-xs font-medium text-green-600 dark:text-green-400">
                                        {plant.difficulty}
                                    </div>
                                </div>

                                {/* Plant Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        {plant.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-3">
                                        {plant.description}
                                    </p>

                                    {/* Care Info */}
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                            <span className="mr-2">☀️</span>
                                            {plant.light}
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                            <span className="mr-2">💧</span>
                                            {plant.water}
                                        </div>
                                    </div>

                                    {/* Price and Action */}
                                    <div className="flex justify-between items-center">
                                        <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                                            ${plant.price}
                                        </span>
                                        <Link
                                            href={`/products/${plant.id}`}
                                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                                                plant.inStock
                                                    ? "bg-green-600 hover:bg-green-700 text-white"
                                                    : "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                                            }`}
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Call to Action */}
                <div className="mt-16 text-center bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Ready to Start Your Plant Journey?
                    </h3>
                    <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                        Join our community of plant lovers and get personalized
                        care recommendations, reminders, and expert tips to help
                        your plants thrive.
                    </p>
                    <Link
                        href="/login"
                        className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
                    >
                        Sign Up for Free
                    </Link>
                </div>
            </div>
        </div>
    );
}
