"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import DashboardPageTitle from "@/components/dashboard/DashboardPageTitle";

const blogPosts = [
  { id: 1, title: "hello world", slug: "/blog/hello-world", status: "Draft", createdDate: "Aug 13, 2026" },
  { id: 2, title: "hello world", slug: "/blog/hello-world", status: "Draft", createdDate: "Aug 13, 2026" },
  { id: 3, title: "fdfdfdf", slug: "/blog/fdfdfdf", status: "Draft", createdDate: "Aug 13, 2026" },
];

const stats = [
  { label: "Total", value: 3 },
  { label: "Published", value: 0 },
  { label: "Drafts", value: 3 },
  { label: "Archived", value: 0 },
];

const statusStyles = {
  Published: "bg-green-100 text-green-700",
  Draft: "bg-yellow-100 text-yellow-700",
  Archived: "bg-gray-100 text-gray-700",
};

const BlogsPage = () => {
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      // TODO: connect to API (delete)
      console.log("Deleted post:", id);
    }
  };

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <DashboardPageTitle title="Blog Posts" description="Manage, write, and publish your blog articles" />
        <Link href="/admin/blogs/create">
          <Button variant="secondary" className="rounded px-4 py-3">
            <i className="fa-solid fa-plus" />
            New Post
          </Button>
        </Link>
      </div>

      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-gray-100 bg-white p-4">
            <p className="text-sm text-light">{stat.label}</p>
            <p className="mt-1 text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mb-6 flex flex-wrap items-end gap-4 rounded-lg border border-gray-100 bg-white p-4">
        <div className="min-w-50 flex-1">
          <label className="mb-1 block text-sm font-medium">Search</label>
          <Input type="text" placeholder="Search by title or content..." className="mb-0" />
        </div>

        <div className="min-w-40">
          <label className="mb-1 block text-sm font-medium">Status</label>
          <select className="w-full rounded-lg border border-gray-100 bg-white p-3 outline-none">
            <option>All Status</option>
            <option>Published</option>
            <option>Draft</option>
            <option>Archived</option>
          </select>
        </div>

        <Button variant="secondary" className="rounded px-6 py-3">
          Apply
        </Button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-100 bg-white">
        <table className="w-full min-w-175 text-left text-sm">
          <thead className="border-b border-gray-100 bg-gray-50 text-light">
            <tr>
              <th className="p-3 font-medium">Title & URL Identifier</th>
              <th className="p-3 font-medium">Status</th>
              <th className="p-3 font-medium">Created Date</th>
              <th className="p-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogPosts.map((post) => (
              <tr key={post.id} className="border-b border-gray-100 last:border-0">
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {post.title.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{post.title}</p>
                      <p className="text-light">{post.slug}</p>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusStyles[post.status]}`}>
                    {post.status}
                  </span>
                </td>
                <td className="p-3">{post.createdDate}</td>
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/admin/blogs/edit/${post.id}`}
                      className="rounded border border-primary p-1 text-primary hover:bg-primary hover:text-white"
                    >
                      <i className="fa-solid fa-pen" />
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="rounded border border-alternative p-1 text-alternative hover:bg-alternative hover:text-white"
                    >
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

export default BlogsPage;