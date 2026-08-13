// app/admin/blogs/create/page.js
"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import DashboardPageTitle from "@/components/dashboard/DashboardPageTitle";

const CreateBlogPage = () => {
  const router = useRouter();
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    body: "",
    status: "draft",
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to API
    router.push("/admin/blog");
  };

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <DashboardPageTitle title="Create Blog Post" description="Write a new article for your blog" />
        <Link href="/admin/blogs">
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
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="How to choose the right web development stack"
                className="mb-0"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Slug</label>
              <Input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                placeholder="how-to-choose-the-right-web-development-stack"
                className="mb-0"
              />
              <p className="mt-1 text-xs text-light">
                URL-friendly identifier. Leave empty to auto-generate.
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-gray-100 bg-white p-6">
            <h2 className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-4 font-bold">
              <i className="fa-solid fa-file-lines text-primary" />
              Content
            </h2>

            <div>
              <label className="mb-1 block text-sm font-medium">Body *</label>
              {/* TODO: replace with rich text editor */}
              <Textarea
                name="body"
                rows={10}
                value={formData.body}
                onChange={handleChange}
                placeholder="Write your blog post content here..."
                className="mb-0"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <div className="mb-6 rounded-lg border border-gray-100 bg-white p-6">
            <h2 className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-4 font-bold">
              <i className="fa-solid fa-gear text-primary" />
              Publishing Options
            </h2>

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
                Publish Post
              </Button>
              <Link href="/admin/blog" className="text-center text-sm text-light hover:text-primary">
                Cancel
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-gray-100 bg-white p-6">
            <h2 className="mb-4 flex items-center gap-2 border-b border-gray-100 pb-4 font-bold">
              <i className="fa-solid fa-image text-primary" />
              Featured Image
            </h2>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/gif,image/webp"
              onChange={handleImageChange}
              className="hidden"
            />

            <div
              onClick={() => fileInputRef.current?.click()}
              className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 p-6 text-center hover:border-primary"
            >
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="h-32 w-full rounded object-cover" />
              ) : (
                <>
                  <i className="fa-solid fa-cloud-arrow-up mb-2 text-2xl text-light" />
                  <p className="text-sm font-medium">Click or drag image</p>
                  <p className="mt-1 text-xs text-light">JPG, PNG, GIF or WebP (max 5MB)</p>
                </>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogPage;