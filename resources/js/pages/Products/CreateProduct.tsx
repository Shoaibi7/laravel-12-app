// resources/js/pages/CreateProduct.tsx
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/products',
    },
    {
        title: 'Create',
        href: '/products/create',
    },
];

export default function CreateProduct() {
    const [formData, setFormData] = useState({
        title: '',
        price: 0,
        description: '',
        image: '',
        category: '',
    });

    const [errors, setErrors] = useState<any>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({}); // Clear previous errors

        try {
            await router.post('/api/products', formData, {
                onSuccess: () => router.visit('/products'), // Redirect to products list after creation
                onError: (error) => setErrors(error), // Handle validation errors
            });
        } catch (err) {
            console.error('Error creating product:', err);
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create Product" />
            <div className="container mx-auto px-6 py-12">
                {/* Header */}
                <h2 className="mb-8 text-center text-3xl font-bold text-gray-800 dark:text-gray-200">
                    🛒 Create New Product
                </h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
                    {/* Title */}
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Enter product title"
                            value={formData.title}
                            onChange={handleChange}
                            className={`mt-1 block w-full rounded-lg border-gray-300 px-4 py-3 shadow-sm focus:border-purple-500 focus:ring-purple-500 ${
                                errors?.title ? 'border-red-500' : ''
                            } dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200`}
                        />
                        {errors?.title && (
                            <p className="mt-1 text-sm text-red-500">{errors.title[0]}</p>
                        )}
                    </div>

                    {/* Price */}
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            placeholder="Enter product price"
                            value={formData.price}
                            onChange={handleChange}
                            className={`mt-1 block w-full rounded-lg border-gray-300 px-4 py-3 shadow-sm focus:border-purple-500 focus:ring-purple-500 ${
                                errors?.price ? 'border-red-500' : ''
                            } dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200`}
                        />
                        {errors?.price && (
                            <p className="mt-1 text-sm text-red-500">{errors.price[0]}</p>
                        )}
                    </div>

                    {/* Description */}
                    <div>
                        <label
                            htmlFor="description"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            placeholder="Enter product description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={4}
                            className={`mt-1 block w-full rounded-lg border-gray-300 px-4 py-3 shadow-sm focus:border-purple-500 focus:ring-purple-500 ${
                                errors?.description ? 'border-red-500' : ''
                            } dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200`}
                        />
                        {errors?.description && (
                            <p className="mt-1 text-sm text-red-500">{errors.description[0]}</p>
                        )}
                    </div>

                    {/* Image URL */}
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Image URL
                        </label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            placeholder="Enter image URL"
                            value={formData.image}
                            onChange={handleChange}
                            className={`mt-1 block w-full rounded-lg border-gray-300 px-4 py-3 shadow-sm focus:border-purple-500 focus:ring-purple-500 ${
                                errors?.image ? 'border-red-500' : ''
                            } dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200`}
                        />
                        {errors?.image && (
                            <p className="mt-1 text-sm text-red-500">{errors.image[0]}</p>
                        )}
                    </div>

                    {/* Category */}
                    <div>
                        <label
                            htmlFor="category"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                            Category
                        </label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            placeholder="Enter product category"
                            value={formData.category}
                            onChange={handleChange}
                            className={`mt-1 block w-full rounded-lg border-gray-300 px-4 py-3 shadow-sm focus:border-purple-500 focus:ring-purple-500 ${
                                errors?.category ? 'border-red-500' : ''
                            } dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200`}
                        />
                        {errors?.category && (
                            <p className="mt-1 text-sm text-red-500">{errors.category[0]}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                        >
                            Create Product
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
