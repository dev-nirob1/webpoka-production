// app/admin/page.js
import Link from "next/link";
import Button from "@/components/ui/Button";
import DashboardPageTitle from "@/components/dashboard/DashboardPageTitle";

const quickAccess = [
  {
    title: "Add New User",
    description: "Create a new authenticated user profile with assigned credentials.",
    action: "Create Profile",
    href: "/admin/users/create",
    icon: "fa-solid fa-user-plus",
  },
  {
    title: "Create Content",
    description: "Write, format, and publish new media articles or blog entries.",
    action: "Write Post",
    href: "/admin/blogs/create",
    icon: "fa-solid fa-pen-to-square",
  },
  {
    title: "System Settings",
    description: "Manage site name, descriptions, authentication, and global preferences.",
    action: "Configure",
    href: "/admin/settings",
    icon: "fa-solid fa-gear",
  },
];

const stats = [
  { label: "Total Users", value: 1 },
  { label: "Total Contents", value: 32 },
  { label: "Published", value: 28 },
  { label: "Page Views", value: "1,601" },
];

const recentUsers = [
  {
    id: 1,
    name: "Admin",
    email: "admin@webpoka.com",
    joinedDate: "Aug 13, 2026",
    status: "Active",
  },
];

const AdminDashboardPage = () => {
  return (
    <div>
      <DashboardPageTitle
        title="Quick Management Utilities"
        description="Frequently used admin actions at your fingertips"
      />

      <div className="mt-6">
        <h2 className="mb-4 font-bold">Quick Access</h2>

        <div className="grid gap-4 md:grid-cols-3">
          {quickAccess.map((item) => (
            <div key={item.title} className="rounded-lg border border-gray-100 bg-white p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-xl text-primary">
                <i className={item.icon} />
              </div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="mt-1 text-sm text-light">{item.description}</p>
              <Link href={item.href}>
                <Button variant="secondary" className="mt-4 w-full rounded px-4 py-3">
                  {item.action}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-gray-100 bg-white p-4">
            <p className="text-sm text-light">{stat.label}</p>
            <p className="mt-1 text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-lg border border-gray-100 bg-white p-6">
        <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
          <h2 className="font-bold">Recent Users</h2>
          <Link href="/admin/users" className="text-sm text-primary hover:underline">
            View All
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px] text-left text-sm">
            <thead className="text-light">
              <tr>
                <th className="p-3 font-medium">Name</th>
                <th className="p-3 font-medium">Email Address</th>
                <th className="p-3 font-medium">Date Joined</th>
                <th className="p-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentUsers.map((user) => (
                <tr key={user.id} className="border-t border-gray-100">
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
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;