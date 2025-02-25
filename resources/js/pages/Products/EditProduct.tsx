// resources/js/pages/EditProduct.tsx
import { useNavigate, useParams } from 'react-router-dom';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/products',
    },
    {
        title: 'Edit',
        href: '/products/edit/:id',
    },
];

export default function EditProduct() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        price: 0,
        description: '',
        image: '',
        category: '',
    });

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setFormData(data));
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await fetch(`https://fakestoreapi.com/products/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        navigate('/products');
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Product" />
            <div className="container mx-auto px-6 py-12">
                <h2 className="mb-6 text-2xl font-bold text-gray-300">Edit Product</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full rounded border p-2"
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full rounded border p-2"
                    />
                    <textarea
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full rounded border p-2"
                    />
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        value={formData.image}
                        onChange={handleChange}
                        className="w-full rounded border p-2"
                    />
                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full rounded border p-2"
                    />
                    <button
                        type="submit"
                        className="w-full rounded bg-gradient-to-r from-purple-500 to-blue-600 py-2 text-white transition duration-300 hover:opacity-90"
                    >
                        Update Product
                    </button>
                </form>
            </div>
        </AppLayout>
    );
}
