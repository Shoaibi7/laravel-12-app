import Loader from '@/components/Loader';
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

export default function products() {
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

    if (loading) {
        return <Loader />;
    }
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            <div className="container mx-auto px-6 py-12">
                <h2 className="mb-12 text-center text-4xl font-bold text-gray-300">🛍️ Our Products 🛒</h2>
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
                                <button className="w-full rounded-md bg-gradient-to-r from-purple-500 to-blue-600 py-2 text-white transition duration-300 hover:opacity-90">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
