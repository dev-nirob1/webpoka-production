// app/admin/contents/edit/[id]/page.js
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import DashboardPageTitle from "@/components/dashboard/DashboardPageTitle";

// TODO: replace with API fetch by id
const dummyPage = {
    id: 1,
    title: "about webpoka",
    slug: "about-webpoka",
    details: "Webpoka is a web agency specializing in modern, high-quality digital solutions...",
    status: "published",
    type: "page",
};

const EditPagePage = () => {
    const { id } = useParams();
    const router = useRouter();

    const [formData, setFormData] = useState({
        title: "",
        slug: "",
        details: "",
        status: "draft",
        type: "post",
    });

    useEffect(() => {
        // TODO: fetch(`/api/contents/${id}`) and setFormData(response)
        setFormData(dummyPage);
    }, [id]);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: connect to API (update)
        router.push("/admin/contents");
    };

    return (
        <div>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <DashboardPageTitle title="Edit Page" description={`Editing: ${formData.title}`} />
                <Link href="/admin/contents">
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
                            Content Details
                        </h2>

                        <div>
                            <label className="mb-1 block text-sm font-medium">Details *</label>
                            {/* TODO: replace with rich text editor */}
                            <Textarea
                                name="details"
                                rows={8}
                                value={formData.details}
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

                        <div className="mb-4">
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

                        <div className="mb-6">
                            <label className="mb-1 block text-sm font-medium">Type</label>
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="w-full rounded-lg border border-gray-100 bg-white p-3 outline-none"
                            >
                                <option value="post">Post</option>
                                <option value="page">Page</option>
                                <option value="article">Article</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-3">
                            <Button variant="secondary" type="submit" className="w-full rounded px-6 py-3">
                                Update Page
                            </Button>
                            <Link href="/admin/contents" className="text-center text-sm text-light hover:text-primary">
                                Cancel
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditPagePage;