"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import DashboardPageTitle from "@/components/dashboard/DashboardPageTitle";

const pages = [];

const stats = [
  { label: "Total", value: 0 },
  { label: "Published", value: 0 },
  { label: "Drafts", value: 0 },
  { label: "Archived", value: 0 },
];

const PagesPage = () => {
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <DashboardPageTitle
          title="Pages"
          description="Manage, draft, publish, and structure your website pages"
        />
        <Link href="/admin/pages/create">
          <Button variant="secondary" className="rounded px-4 py-3">
            <i className="fa-solid fa-plus" />
            Add Page
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
          <Input type="text" placeholder="Search by title, tags, or description..." className="mb-0" />
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

      {pages.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border border-gray-100 bg-white p-16 text-center">
          <i className="fa-solid fa-file mb-4 text-4xl text-light" />
          <p className="font-medium">No pages found</p>
          <p className="mt-1 text-sm text-light">Get started by creating your first page.</p>
          <Link href="/admin/pages/create" className="mt-4">
            <Button variant="secondary" className="rounded px-4 py-3">
              <i className="fa-solid fa-plus" />
              Add Page
            </Button>
          </Link>
        </div>
      ) : (
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
              {pages.map((page) => (
                <tr key={page.id} className="border-b border-gray-100 last:border-0">
                  <td className="p-3">
                    <p className="font-medium">{page.title}</p>
                    <p className="text-light">{page.slug}</p>
                  </td>
                  <td className="p-3">{page.status}</td>
                  <td className="p-3">{page.createdDate}</td>
                  <td className="p-3">{/* actions */}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PagesPage;