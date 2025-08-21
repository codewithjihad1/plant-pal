"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { plantsData } from "@/data/plants";

export default function ProductDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("overview");

    const productId = parseInt(params.id);
    const product = plantsData.find((plant) => plant.id === productId);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="text-center">
                    <div className="text-6xl mb-4">🌱</div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Plant Not Found
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        The plant you&apos;re looking for doesn&apos;t exist or
                        may have been removed.
                    </p>
                    <Link
                        href="/products"
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                        Back to Products
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Breadcrumb */}
                <nav className="flex mb-8" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <Link
                                href="/"
                                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400"
                            >
                                <svg
                                    className="w-3 h-3 mr-2.5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                Home
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg
                                    className="w-3 h-3 text-gray-400 mx-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    ></path>
                                </svg>
                                <Link
                                    href="/products"
                                    className="ml-1 text-sm font-medium text-gray-700 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400"
                                >
                                    Products
                                </Link>
                            </div>
                        </li>
                        <li aria-current="page">
                            <div className="flex items-center">
                                <svg
                                    className="w-3 h-3 text-gray-400 mx-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    ></path>
                                </svg>
                                <span className="ml-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                                    {product.name}
                                </span>
                            </div>
                        </li>
                    </ol>
                </nav>

                {/* Product Details */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Product Image */}
                        <div className="relative">
                            <div className="h-96 lg:h-full bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 flex items-center justify-center">
                                <span className="text-9xl">
                                    {product.image}
                                </span>

                                {/* Status Badges */}
                                <div className="absolute top-6 left-6 space-y-2">
                                    {!product.inStock && (
                                        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            Out of Stock
                                        </div>
                                    )}
                                    {product.featured && (
                                        <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            ⭐ Featured
                                        </div>
                                    )}
                                </div>

                                {/* Difficulty Badge */}
                                <div className="absolute bottom-6 right-6 bg-white dark:bg-gray-800 rounded-full px-4 py-2 text-sm font-medium text-green-600 dark:text-green-400 shadow-lg">
                                    {product.difficulty}
                                </div>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="p-8">
                            <div className="mb-6">
                                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                    {product.name}
                                </h1>
                                <p className="text-gray-600 dark:text-gray-300 text-lg">
                                    {product.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                <span className="text-4xl font-bold text-green-600 dark:text-green-400">
                                    ${product.price}
                                </span>
                            </div>

                            {/* Quick Care Info */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                    <div className="flex items-center mb-2">
                                        <span className="text-2xl mr-2">
                                            ☀️
                                        </span>
                                        <span className="font-medium text-gray-900 dark:text-white">
                                            Light
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        {product.light}
                                    </p>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                    <div className="flex items-center mb-2">
                                        <span className="text-2xl mr-2">
                                            💧
                                        </span>
                                        <span className="font-medium text-gray-900 dark:text-white">
                                            Water
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        {product.water}
                                    </p>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                    <div className="flex items-center mb-2">
                                        <span className="text-2xl mr-2">
                                            📏
                                        </span>
                                        <span className="font-medium text-gray-900 dark:text-white">
                                            Size
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        {product.size}
                                    </p>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                    <div className="flex items-center mb-2">
                                        <span className="text-2xl mr-2">
                                            🎯
                                        </span>
                                        <span className="font-medium text-gray-900 dark:text-white">
                                            Difficulty
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">
                                        {product.difficulty}
                                    </p>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    disabled={!product.inStock}
                                    className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
                                        product.inStock
                                            ? "bg-green-600 hover:bg-green-700 text-white"
                                            : "bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                                    }`}
                                >
                                    {product.inStock
                                        ? "🛒 Add to Cart"
                                        : "❌ Out of Stock"}
                                </button>

                                <button className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                                    ❤️ Add to Wishlist
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Information Tabs */}
                    <div className="border-t border-gray-200 dark:border-gray-700">
                        {/* Tab Navigation */}
                        <nav
                            className="flex space-x-8 px-8 pt-6"
                            aria-label="Tabs"
                        >
                            {["overview", "care", "benefits"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                                        activeTab === tab
                                            ? "border-green-500 text-green-600 dark:text-green-400"
                                            : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
                                    }`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </nav>

                        {/* Tab Content */}
                        <div className="px-8 py-6">
                            {activeTab === "overview" && (
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                        Plant Overview
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        {product.description}
                                    </p>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        <div>
                                            <span className="font-medium text-gray-900 dark:text-white">
                                                Category:
                                            </span>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                {product.category}
                                            </p>
                                        </div>
                                        <div>
                                            <span className="font-medium text-gray-900 dark:text-white">
                                                Size:
                                            </span>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                {product.size}
                                            </p>
                                        </div>
                                        <div>
                                            <span className="font-medium text-gray-900 dark:text-white">
                                                Difficulty:
                                            </span>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                {product.difficulty}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "care" && (
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                        Care Instructions
                                    </h3>
                                    <ul className="space-y-3">
                                        {product.careInstructions.map(
                                            (instruction, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start"
                                                >
                                                    <span className="text-green-500 mr-3 mt-1">
                                                        ✓
                                                    </span>
                                                    <span className="text-gray-600 dark:text-gray-300">
                                                        {instruction}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}

                            {activeTab === "benefits" && (
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                        Plant Benefits
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {product.benefits.map(
                                            (benefit, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center bg-green-50 dark:bg-green-900/20 rounded-lg p-4"
                                                >
                                                    <span className="text-green-500 mr-3">
                                                        🌟
                                                    </span>
                                                    <span className="text-gray-900 dark:text-white font-medium">
                                                        {benefit}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Back to Products */}
                <div className="mt-8 text-center">
                    <Link
                        href="/products"
                        className="inline-flex items-center text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-medium"
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
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            ></path>
                        </svg>
                        Back to All Products
                    </Link>
                </div>
            </div>
        </div>
    );
}
