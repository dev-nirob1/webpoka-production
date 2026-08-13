// app/admin/blogs/edit/[id]/page.js
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import DashboardPageTitle from "@/components/dashboard/DashboardPageTitle";

// TODO: replace with API fetch by id
const dummyPost = {
  id: 1,
  title: "hello world",
  slug: "hello-world",
  body: "This is my first blog post...",
  status: "draft",
};

const EditBlogPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    body: "",
    status: "draft",
  });

  useEffect(() => {
    // TODO: fetch(`/api/blogs/${id}`) and setFormData(response)
    setFormData(dummyPost);
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to API (update)
    router.push("/admin/blogs");
  };

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <DashboardPageTitle title="Edit Blog Post" description={`Editing: ${formData.title}`} />
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
                className="mb-0"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-lg border border-gray-100 bg-white p-6">
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
                Update Post
              </Button>
              <Link href="/admin/blogs" className="text-center text-sm text-light hover:text-primary">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditBlogPage;