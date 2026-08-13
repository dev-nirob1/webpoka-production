// app/admin/services/edit/[id]/page.js
"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import DashboardPageTitle from "@/components/dashboard/DashboardPageTitle";

// TODO: replace with API fetch by id
const dummyService = {
  id: 6,
  title: "Digital Marketing",
  slug: "digital-marketing",
  icon: "fas fa-bullhorn",
  description:
    "Comprehensive digital marketing campaigns that convert visitors into customers.\n\n- PPC Campaigns\n- Social Media Marketing\n- Email Marketing\n- Conversion Optimization",
  status: "published",
};

const EditServicePage = () => {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    icon: "",
    description: "",
    status: "draft",
  });

  useEffect(() => {
    // TODO: fetch(`/api/services/${id}`) and setFormData(response)
    setFormData(dummyService);
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to API (update)
  };

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <DashboardPageTitle title="Edit Service" description={`Editing: ${formData.title}`} />
        <Link href="/admin/services">
          <Button variant="secondary" className="rounded px-4 py-3">
            <i className="fa-solid fa-arrow-left" />
            Back to List
          </Button>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-6 rounded-lg border border-gray-100 bg-white p-6">
            <h2 className="mb-4 font-bold">Basic Information</h2>

            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium">Title *</label>
              <Input
                type="text"
                name="title"
                value={formData.title}
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

            <div>
              <label className="mb-1 block text-sm font-medium">Icon Class *</label>
              <Input
                type="text"
                name="icon"
                value={formData.icon}
                onChange={handleChange}
                className="mb-0"
              />
              <p className="mt-1 text-xs text-light">
                Enter a Font Awesome icon class. Examples: `fas fa-code`, `fas fa-mobile-alt`,
                `fas fa-paint-brush`, `fas fa-search`, `fas fa-server`, `fas fa-chart-line`
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-gray-100 bg-white p-6">
            <h2 className="mb-4 font-bold">Service Details</h2>

            <div>
              <label className="mb-1 block text-sm font-medium">Description</label>
              {/* TODO: replace with rich text editor */}
              <Textarea
                name="description"
                rows={8}
                value={formData.description}
                onChange={handleChange}
                className="mb-0"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-lg border border-gray-100 bg-white p-6">
            <h2 className="mb-4 font-bold">Publishing Options</h2>

            <div className="mb-6">
              <label className="mb-1 block text-sm font-medium">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-100 bg-white p-3 shadow-box outline-none"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            <div className="flex flex-col gap-3">
              <Button variant="secondary" type="submit" className="w-full rounded px-6 py-3">
                Update Service
              </Button>
              <Link href="/admin/services" className="text-center text-sm text-light hover:text-primary">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditServicePage;