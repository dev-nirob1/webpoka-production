"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import DashboardPageTitle from "@/components/dashboard/DashboardPageTitle";

const categories = [
  { id: 5, name: "Landing Page", slug: "landing-page", status: "Active", createdDate: "Aug 13, 2026" },
  { id: 4, name: "POS", slug: "pos", status: "Active", createdDate: "Aug 13, 2026" },
  { id: 3, name: "Real Estate", slug: "real-estate", status: "Active", createdDate: "Aug 13, 2026" },
  { id: 2, name: "Restaurant", slug: "restaurant", status: "Active", createdDate: "Aug 13, 2026" },
  { id: 1, name: "Website", slug: "website", status: "Active", createdDate: "Aug 13, 2026" },
];

const CategoriesPage = () => {
  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      // TODO: connect to API (delete)
      console.log("Deleted category:", id);
    }
  };

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <DashboardPageTitle title="Categories" description="Organize your content with categories" />
        <Link href="/admin/categories/create">
          <Button variant="secondary" className="rounded px-4 py-3">
            <i className="fa-solid fa-plus" />
            Add Category
          </Button>
        </Link>
      </div>

      <div className="mb-6 flex flex-wrap items-end gap-4 rounded-lg border border-gray-100 bg-white p-4">
        <div className="min-w-50 flex-1">
          <label className="mb-1 block text-sm font-medium">Search</label>
          <Input
            type="text"
            placeholder="Search by category name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-0"
          />
        </div>

        <Button variant="secondary" className="rounded px-6 py-3">
          Search
        </Button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-100 bg-white">
        <table className="w-full min-w-175 text-left text-sm">
          <thead className="border-b border-gray-100 bg-gray-50 text-light">
            <tr>
              <th className="p-3 font-medium">ID</th>
              <th className="p-3 font-medium">Name</th>
              <th className="p-3 font-medium">Slug</th>
              <th className="p-3 font-medium">Status</th>
              <th className="p-3 font-medium">Created</th>
              <th className="p-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-b border-gray-100 last:border-0">
                <td className="p-3">#{category.id}</td>
                <td className="p-3 font-medium">{category.name}</td>
                <td className="p-3 text-light">{category.slug}</td>
                <td className="p-3">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    {category.status}
                  </span>
                </td>
                <td className="p-3">{category.createdDate}</td>
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/admin/categories/edit/${category.id}`}
                      className="rounded border border-primary p-1 text-primary hover:bg-primary hover:text-white"
                    >
                      <i className="fa-solid fa-pen" />
                    </Link>
                    <button
                      onClick={() => handleDelete(category.id)}
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

export default CategoriesPage;