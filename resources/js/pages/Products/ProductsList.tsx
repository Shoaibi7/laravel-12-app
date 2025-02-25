// resources/js/pages/ProductsList.tsx
import { Link } from 'react-router-dom';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/products',
    },
];

export default function ProductsList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            });
    }, []);

    const handleDelete = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            await fetch(`https://fakestoreapi.com/products/${id}`, { method: 'DELETE' });
            setProducts(products.filter((product) => product.id !== id));
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            <div className="container mx-auto px-6 py-12">
                <h2 className="mb-12 text-center text-4xl font-bold text-gray-300">🛍️ Our Products 🛒</h2>
                <Link
                    to="/products/create"
                    className="mb-6 inline-block rounded bg-gradient-to-r from-purple-500 to-blue-600 px-4 py-2 text-white transition duration-300 hover:opacity-90"
                >
                    Create New Product
                </Link>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl"
                        >
                            <img className="h-64 w-full object-contain p-4" src={product.image} alt={product.title} />
                            <div className="p-6">
                                <h3 className="mb-2 truncate text-lg font-semibold text-gray-800">{product.title}</h3>
                                <p className="mb-4 font-bold text-purple-600">${product.price}</p>
                                <div className="flex justify-between">
                                    <Link
                                        to={`/products/edit/${product.id}`}
                                        className="rounded bg-yellow-500 px-4 py-2 text-white transition duration-300 hover:bg-yellow-600"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(product.id)}
                                        className="rounded bg-red-500 px-4 py-2 text-white transition duration-300 hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
