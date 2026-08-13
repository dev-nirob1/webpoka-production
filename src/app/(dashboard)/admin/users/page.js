import Link from "next/link";
import Button from "@/components/ui/Button";
import DashboardPageTitle from "@/components/dashboard/DashboardPageTitle";

const users = [
    {
        id: 1,
        name: "Admin",
        email: "admin@webpoka.com",
        joinedDate: "Aug 13, 2026",
    },
];

const UsersPage = () => {
    return (
        <div>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <DashboardPageTitle
                    title="Users"
                    description="Manage authenticated user profiles and authorization records"
                />
                <Link href="/admin/users/create">
                    <Button variant="secondary" className="rounded px-4 py-3">
                        <i className="fa-solid fa-plus" />
                        Add User Account
                    </Button>
                </Link>
            </div>

            <div className="overflow-x-auto rounded-lg bg-white border border-gray-100">
                <table className="w-full min-w-175 text-left text-sm">
                    <thead className="border-b border-gray-100 text-light bg-gray-50">
                        <tr>
                            <th className="p-3 font-medium">ID</th>
                            <th className="p-3 font-medium">User Detail</th>
                            <th className="p-3 font-medium">Email Address</th>
                            <th className="p-3 font-medium">Date Joined</th>
                            <th className="p-3 font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b border-gray-100 last:border-0">
                                <td className="p-3">#{user.id}</td>
                                <td className="p-3">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                                            {user.name.charAt(0)}
                                        </div>
                                        {user.name}
                                    </div>
                                </td>
                                <td className="p-3">{user.email}</td>
                                <td className="p-3">{user.joinedDate}</td>
                                <td className="p-3">
                                    <div className="flex items-center gap-3">
                                        <button className="border border-primary text-primary hover:text-white hover:bg-primary p-1 rounded">
                                            <i className="fa-solid fa-pen" />
                                        </button>
                                        <button className="border border-alternative text-alternative hover:text-white hover:bg-alternative p-1 rounded">
                                            <i className="fa-solid fa-trash" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersPage;