"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AddProductPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        category: "Indoor",
        difficulty: "Easy",
        light: "",
        water: "",
        size: "Medium",
        careInstructions: [""],
        benefits: [""],
        image: "🌱",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [error, setError] = useState("");

    // Redirect to login if not authenticated
    if (status === "loading") {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                        Loading...
                    </p>
                </div>
            </div>
        );
    }

    if (!session) {
        router.push("/login");
        return null;
    }

    const plantEmojis = [
        "🌱",
        "🌿",
        "🌳",
        "🌵",
        "🍃",
        "🌾",
        "🌺",
        "🌻",
        "🌹",
        "🌷",
        "🌸",
        "🌼",
        "🌪️",
        "🕊️",
        "🐍",
        "✨",
    ];
    const categories = [
        "Indoor",
        "Outdoor",
        "Succulent",
        "Fern",
        "Flowering",
        "Herb",
    ];
    const difficulties = ["Very Easy", "Easy", "Intermediate", "Hard"];
    const sizes = ["Small", "Medium", "Large", "Extra Large"];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleArrayInputChange = (index, value, field) => {
        setFormData((prev) => ({
            ...prev,
            [field]: prev[field].map((item, i) => (i === index ? value : item)),
        }));
    };

    const addArrayItem = (field) => {
        setFormData((prev) => ({
            ...prev,
            [field]: [...prev[field], ""],
        }));
    };

    const removeArrayItem = (index, field) => {
        if (formData[field].length > 1) {
            setFormData((prev) => ({
                ...prev,
                [field]: prev[field].filter((_, i) => i !== index),
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            // Validate form data
            if (
                !formData.name.trim() ||
                !formData.description.trim() ||
                !formData.price
            ) {
                throw new Error("Please fill in all required fields");
            }

            if (
                isNaN(parseFloat(formData.price)) ||
                parseFloat(formData.price) <= 0
            ) {
                throw new Error("Please enter a valid price");
            }

            // Filter out empty care instructions and benefits
            const cleanedData = {
                ...formData,
                price: parseFloat(formData.price),
                careInstructions: formData.careInstructions.filter(
                    (instruction) => instruction.trim()
                ),
                benefits: formData.benefits.filter((benefit) => benefit.trim()),
                id: Date.now(), // Simple ID generation for demo
                inStock: true,
                featured: false,
            };

            // Simulate API call to save product
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // In a real app, you would send this data to your backend API
            console.log("New product data:", cleanedData);

            setSubmitSuccess(true);

            // Reset form after successful submission
            setTimeout(() => {
                setFormData({
                    name: "",
                    description: "",
                    price: "",
                    category: "Indoor",
                    difficulty: "Easy",
                    light: "",
                    water: "",
                    size: "Medium",
                    careInstructions: [""],
                    benefits: [""],
                    image: "🌱",
                });
                setSubmitSuccess(false);
            }, 3000);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitSuccess) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
                    <div className="text-6xl mb-4">🎉</div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                        Product Added Successfully!
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Your new plant has been added to the PlantPal catalog
                        and is now available for others to discover.
                    </p>
                    <div className="space-y-3">
                        <Link
                            href="/products"
                            className="block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            View All Products
                        </Link>
                        <button
                            onClick={() => setSubmitSuccess(false)}
                            className="block w-full border border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            Add Another Product
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {/* Header */}
            <div className="bg-white dark:bg-gray-800 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                🌱 Add New Plant
                            </h1>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">
                                Share a beautiful plant with the PlantPal
                                community
                            </p>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            Welcome, {session.user?.name || session.user?.email}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <form onSubmit={handleSubmit} className="p-8">
                        {error && (
                            <div className="mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                                <p className="text-sm text-red-600 dark:text-red-400">
                                    {error}
                                </p>
                            </div>
                        )}

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Left Column - Basic Info */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                        Basic Information
                                    </h3>
                                </div>

                                {/* Plant Name */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                    >
                                        Plant Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                                        placeholder="e.g., Monstera Deliciosa"
                                    />
                                </div>

                                {/* Description */}
                                <div>
                                    <label
                                        htmlFor="description"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                    >
                                        Description *
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        required
                                        rows={4}
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                                        placeholder="Describe the plant, its characteristics, and what makes it special..."
                                    />
                                </div>

                                {/* Price */}
                                <div>
                                    <label
                                        htmlFor="price"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                    >
                                        Price (USD) *
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-3 text-gray-500 dark:text-gray-400">
                                            $
                                        </span>
                                        <input
                                            type="number"
                                            id="price"
                                            name="price"
                                            required
                                            min="0"
                                            step="0.01"
                                            value={formData.price}
                                            onChange={handleInputChange}
                                            className="w-full pl-8 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                                            placeholder="29.99"
                                        />
                                    </div>
                                </div>

                                {/* Plant Image (Emoji) */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Plant Icon
                                    </label>
                                    <div className="grid grid-cols-8 gap-2">
                                        {plantEmojis.map((emoji) => (
                                            <button
                                                key={emoji}
                                                type="button"
                                                onClick={() =>
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        image: emoji,
                                                    }))
                                                }
                                                className={`p-3 text-2xl rounded-lg border-2 transition-colors ${
                                                    formData.image === emoji
                                                        ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                                                        : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
                                                }`}
                                            >
                                                {emoji}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Care Details */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                        Plant Details
                                    </h3>
                                </div>

                                {/* Category */}
                                <div>
                                    <label
                                        htmlFor="category"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                    >
                                        Category
                                    </label>
                                    <select
                                        id="category"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                                    >
                                        {categories.map((category) => (
                                            <option
                                                key={category}
                                                value={category}
                                            >
                                                {category}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Difficulty */}
                                <div>
                                    <label
                                        htmlFor="difficulty"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                    >
                                        Care Difficulty
                                    </label>
                                    <select
                                        id="difficulty"
                                        name="difficulty"
                                        value={formData.difficulty}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
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

                                {/* Size */}
                                <div>
                                    <label
                                        htmlFor="size"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                    >
                                        Plant Size
                                    </label>
                                    <select
                                        id="size"
                                        name="size"
                                        value={formData.size}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                                    >
                                        {sizes.map((size) => (
                                            <option key={size} value={size}>
                                                {size}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Light Requirements */}
                                <div>
                                    <label
                                        htmlFor="light"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                    >
                                        Light Requirements
                                    </label>
                                    <input
                                        type="text"
                                        id="light"
                                        name="light"
                                        value={formData.light}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                                        placeholder="e.g., Bright, indirect light"
                                    />
                                </div>

                                {/* Water Requirements */}
                                <div>
                                    <label
                                        htmlFor="water"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                                    >
                                        Water Requirements
                                    </label>
                                    <input
                                        type="text"
                                        id="water"
                                        name="water"
                                        value={formData.water}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                                        placeholder="e.g., Water weekly"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Care Instructions */}
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                Care Instructions
                            </h3>
                            {formData.careInstructions.map(
                                (instruction, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-2 mb-3"
                                    >
                                        <input
                                            type="text"
                                            value={instruction}
                                            onChange={(e) =>
                                                handleArrayInputChange(
                                                    index,
                                                    e.target.value,
                                                    "careInstructions"
                                                )
                                            }
                                            className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                                            placeholder={`Care instruction ${
                                                index + 1
                                            }`}
                                        />
                                        {formData.careInstructions.length >
                                            1 && (
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    removeArrayItem(
                                                        index,
                                                        "careInstructions"
                                                    )
                                                }
                                                className="px-3 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                            >
                                                ✕
                                            </button>
                                        )}
                                    </div>
                                )
                            )}
                            <button
                                type="button"
                                onClick={() => addArrayItem("careInstructions")}
                                className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-medium"
                            >
                                + Add Care Instruction
                            </button>
                        </div>

                        {/* Benefits */}
                        <div className="mt-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                Plant Benefits
                            </h3>
                            {formData.benefits.map((benefit, index) => (
                                <div key={index} className="flex gap-2 mb-3">
                                    <input
                                        type="text"
                                        value={benefit}
                                        onChange={(e) =>
                                            handleArrayInputChange(
                                                index,
                                                e.target.value,
                                                "benefits"
                                            )
                                        }
                                        className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:text-white"
                                        placeholder={`Benefit ${index + 1}`}
                                    />
                                    {formData.benefits.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeArrayItem(
                                                    index,
                                                    "benefits"
                                                )
                                            }
                                            className="px-3 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                        >
                                            ✕
                                        </button>
                                    )}
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={() => addArrayItem("benefits")}
                                className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-medium"
                            >
                                + Add Benefit
                            </button>
                        </div>

                        {/* Form Actions */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        Adding Plant...
                                    </>
                                ) : (
                                    "Add Plant to Catalog"
                                )}
                            </button>

                            <Link
                                href="/products"
                                className="flex-1 sm:flex-none bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center"
                            >
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
