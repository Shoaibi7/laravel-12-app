import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { DollarSign, ShoppingCart, Users } from 'lucide-react';
import { BarChart, LineChart } from '../components/charts';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex flex-col gap-6 p-4">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">Welcome Back, Admin!</h1>
                    <Button variant="outline">View Reports</Button>
                </div>

                {/* Statistics Section */}
                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <div>
                                <CardDescription>Total Users</CardDescription>
                                <CardTitle className="text-3xl">1,250</CardTitle>
                            </div>
                            <Users className="size-6 text-neutral-500 dark:text-neutral-400" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">+12% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <div>
                                <CardDescription>Total Orders</CardDescription>
                                <CardTitle className="text-3xl">780</CardTitle>
                            </div>
                            <ShoppingCart className="size-6 text-neutral-500 dark:text-neutral-400" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">+5% from last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                            <div>
                                <CardDescription>Revenue</CardDescription>
                                <CardTitle className="text-3xl">$12,500</CardTitle>
                            </div>
                            <DollarSign className="size-6 text-neutral-500 dark:text-neutral-400" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">+8% from last month</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Charts Section */}
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>User Growth</CardTitle>
                            <CardDescription>Last 6 months</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <LineChart
                                data={[
                                    { month: 'Jan', users: 100 },
                                    { month: 'Feb', users: 150 },
                                    { month: 'Mar', users: 200 },
                                    { month: 'Apr', users: 250 },
                                    { month: 'May', users: 300 },
                                    { month: 'Jun', users: 350 },
                                ]}
                            />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Sales Overview</CardTitle>
                            <CardDescription>Last 6 months</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <BarChart
                                data={[
                                    { month: 'Jan', sales: 500 },
                                    { month: 'Feb', sales: 600 },
                                    { month: 'Mar', sales: 700 },
                                    { month: 'Apr', sales: 800 },
                                    { month: 'May', sales: 900 },
                                    { month: 'Jun', sales: 1000 },
                                ]}
                            />
                        </CardContent>
                    </Card>
                </div>

                {/* Placeholder Section */}
                <Card>
                    <CardHeader>
                        <CardTitle>Upcoming Features</CardTitle>
                        <CardDescription>New features will be added soon!</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button variant="outline">Learn More</Button>
                    </CardContent>
                </Card>

                {/* Footer */}
                <footer className="mt-6 border-t border-neutral-200 pt-4 dark:border-neutral-800">
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">© {new Date().getFullYear()} ABC Company. All rights reserved.</p>
                </footer>
            </div>
        </AppLayout>
    );
}
