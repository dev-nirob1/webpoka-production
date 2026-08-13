// app/admin/projects/edit/[id]/page.js
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import DashboardPageTitle from "@/components/dashboard/DashboardPageTitle";

const categories = ["No Category", "Landing Page", "POS", "Real Estate", "Restaurant", "Website"];

// TODO: replace with API fetch by id
const dummyProject = {
  id: 1,
  title: "Forex Bonus – Forex Trading Landing Page",
  slug: "forex-bonus-forex-trading-landing-page",
  details: "Forex Bonus is a modern and conversion-focused landing page designed for the forex trading and financial services industry...",
  category: "Landing Page",
  status: "published",
  liveLink: "https://portfolio.webpoka.com/projects/landing_page/forex_bonus/",
};

const EditProjectPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    details: "",
    category: "No Category",
    status: "draft",
    liveLink: "",
  });

  useEffect(() => {
    // TODO: fetch(`/api/projects/${id}`) and setFormData(response)
    setFormData(dummyProject);
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to API (update)
    router.push("/admin/projects");
  };

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <DashboardPageTitle title="Edit Content" description={`Editing: ${formData.title}`} />
        <Link href="/admin/projects">
          <Button variant="secondary" className="rounded px-4 py-3">
            <i className="fa-solid fa-arrow-left" />
            Back to List
          </Button>
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-6 rounded-lg border border-gray-100 bg-white p-6">
            <h2 className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-4 font-bold">
              <i className="fa-solid fa-circle-info text-primary" />
              Basic Information
            </h2>

            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium">Title *</label>
              <Input type="text" name="title" value={formData.title} onChange={handleChange} className="mb-0" required />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Slug</label>
              <Input type="text" name="slug" value={formData.slug} onChange={handleChange} className="mb-0" />
              <p className="mt-1 text-xs text-light">URL-friendly identifier. Leave empty to auto-generate.</p>
            </div>
          </div>

          <div className="mb-6 rounded-lg border border-gray-100 bg-white p-6">
            <h2 className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-4 font-bold">
              <i className="fa-solid fa-file-lines text-primary" />
              Content Details
            </h2>

            <div>
              <label className="mb-1 block text-sm font-medium">Details *</label>
              {/* TODO: replace with rich text editor */}
              <Textarea name="details" rows={8} value={formData.details} onChange={handleChange} className="mb-0" required />
            </div>
          </div>

          <div className="rounded-lg border border-gray-100 bg-white p-6">
            <h2 className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-4 font-bold">
              <i className="fa-solid fa-link text-primary" />
              Live Project
            </h2>

            <Input
              type="url"
              name="liveLink"
              value={formData.liveLink}
              onChange={handleChange}
              placeholder="https://example.com"
              className="mb-0"
            />
          </div>
        </div>

        <div>
          <div className="rounded-lg border border-gray-100 bg-white p-6">
            <h2 className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-4 font-bold">
              <i className="fa-solid fa-gear text-primary" />
              Publishing Options
            </h2>

            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-100 bg-white p-3 outline-none"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label className="mb-1 block text-sm font-medium">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-100 bg-white p-3 outline-none"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            <div className="flex flex-col gap-3">
              <Button variant="secondary" type="submit" className="w-full rounded px-6 py-3">
                Update Project
              </Button>
              <Link href="/admin/projects" className="text-center text-sm text-light hover:text-primary">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProjectPage;