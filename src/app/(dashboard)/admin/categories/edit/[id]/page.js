// app/admin/categories/edit/[id]/page.js
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import DashboardPageTitle from "@/components/dashboard/DashboardPageTitle";

// TODO: replace with API fetch by id
const dummyCategory = {
  id: 5,
  name: "Landing Page",
  slug: "landing-page",
  status: "active",
};

const EditCategoryPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    status: "active",
  });

  useEffect(() => {
    // TODO: fetch(`/api/categories/${id}`) and setFormData(response)
    setFormData(dummyCategory);
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to API (update)
    router.push("/admin/categories");
  };

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <DashboardPageTitle title="Edit Category" description={`Editing: ${formData.name}`} />
        <Link href="/admin/categories">
          <Button variant="secondary" className="rounded px-4 py-3">
            <i className="fa-solid fa-arrow-left" />
            Back to List
          </Button>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto max-w-lg">
        <div className="rounded-lg border border-gray-100 bg-white p-6">
          <h2 className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-4 font-bold">
            <i className="fa-solid fa-tag text-primary" />
            Category Details
          </h2>

          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium">Name *</label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mb-0"
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium">Slug</label>
            <Input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              className="mb-0"
            />
            <p className="mt-1 text-xs text-light">
              URL-friendly identifier. Leave empty to auto-generate.
            </p>
          </div>

          <div className="mb-6">
            <label className="mb-1 block text-sm font-medium">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-100 bg-white p-3 outline-none"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div className="flex flex-col gap-3">
            <Button variant="secondary" type="submit" className="w-full justify-center rounded px-6 py-3">
              Update Category
            </Button>
            <Link href="/admin/categories" className="text-center text-sm text-light hover:text-primary">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditCategoryPage;