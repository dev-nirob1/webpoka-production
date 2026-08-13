"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import DashboardPageTitle from "@/components/dashboard/DashboardPageTitle";

const CreateServicePage = () => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    icon: "",
    description: "",
    status: "draft",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to API
  };

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <DashboardPageTitle title="Create Service" description="Add a new service to your website" />
        <Link href="/admin/services">
          <Button variant="secondary" className="rounded px-4 py-3">
            <i className="fa-solid fa-arrow-left" />
            Back to List
          </Button>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-3">
        {/* Left column — 2/3 width */}
        <div className="lg:col-span-2">
          <div className="mb-6 rounded-lg border border-gray-100 bg-white p-6">
            <h2 className="mb-4 pb-3 border-b font-bold">Basic Information</h2>

            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium">Title *</label>
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Web Development"
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
                placeholder="web-development"
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
                placeholder="fas fa-code"
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
              {/* TODO: replace with rich text editor (dashboard output parsed as HTML list) */}
              <Textarea
                name="description"
                rows={8}
                value={formData.description}
                onChange={handleChange}
                placeholder={"Custom web applications built with modern technologies for optimal performance and scalability.\n\n- Responsive Design\n- Custom CMS Solutions\n- E-commerce Platforms\n- Progressive Web Apps"}
                className="mb-0"
              />
              <p className="mt-1 text-xs text-light">
                This will be a rich text editor — list items typed here render as bullet points
                on the service page.
              </p>
            </div>
          </div>
        </div>

        {/* Right column — 1/3 width */}
        <div>
          <div className="rounded-lg border border-gray-100 bg-white p-6">
            <h2 className="mb-4 pb-3 font-bold border-b">Publishing Options</h2>

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
              <Button variant="secondary" type="submit" className="w-full justify-center rounded px-6 py-3">
                Create Service
              </Button>
              <Link href="/admin/services" className="text-center border border-light text-sm text-light hover:text-primary p-2 rounded">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateServicePage;