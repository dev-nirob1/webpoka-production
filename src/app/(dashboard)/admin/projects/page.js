"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import DashboardPageTitle from "@/components/dashboard/DashboardPageTitle";

const projects = [
  { id: 1, title: "Forex Bonus – Forex Trading Landing Page", slug: "/forex-bonus-forex-trading-landing-page", status: "Published", createdDate: "Aug 13, 2026" },
  { id: 2, title: "Limo Service – Luxury Transportation Landing Page", slug: "/limo-service-luxury-transportation-landing-page", status: "Published", createdDate: "Aug 13, 2026" },
  { id: 3, title: "Realestate Zack – Real Estate Landing Page", slug: "/realestate-zack-real-estate-landing-page", status: "Published", createdDate: "Aug 13, 2026" },
  { id: 4, title: "Italian Restaurant", slug: "/italian-restaurant", status: "Published", createdDate: "Aug 13, 2026" },
  { id: 5, title: "Hunger Needs– Restaurant", slug: "/hunger-needs-restaurant", status: "Published", createdDate: "Aug 13, 2026" },
  { id: 6, title: "Vesco – Luxury Interior & Architecture Landing Page", slug: "/vesco-luxury-interior-architecture-landing-page", status: "Published", createdDate: "Aug 13, 2026" },
  { id: 7, title: "Renovation – Home Renovation Landing Page", slug: "/renovation-home-renovation-landing-page", status: "Published", createdDate: "Aug 13, 2026" },
  { id: 8, title: "Events – Event Landing Page", slug: "/events-event-landing-page", status: "Published", createdDate: "Aug 13, 2026" },
  { id: 9, title: "Cryptocoin – Cryptocurrency Landing Page", slug: "/cryptocoin-cryptocurrency-landing-page", status: "Published", createdDate: "Aug 13, 2026" },
  { id: 10, title: "SlicePoint – Modern Web Landing Page", slug: "/slicepoint-modern-web-landing-page", status: "Published", createdDate: "Aug 13, 2026" },
];

const stats = [
  { label: "Total", value: 21 },
  { label: "Published", value: 21 },
  { label: "Drafts", value: 0 },
  { label: "Projects", value: 21 },
];

const totalPages = 3;

const ProjectsPage = () => {
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      // TODO: connect to API (delete)
      console.log("Deleted project:", id);
    }
  };

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <DashboardPageTitle
          title="Contents"
          description="Manage, publish, and showcase your portfolio projects"
        />
        <Link href="/admin/projects/create">
          <Button variant="secondary" className="rounded px-4 py-3">
            <i className="fa-solid fa-plus" />
            Add Project
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
          <select className="w-full rounded-lg border border-gray-100 bg-white p-3 shadow-box outline-none">
            <option>All Status</option>
            <option>Published</option>
            <option>Draft</option>
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
            {projects.map((project) => (
              <tr key={project.id} className="border-b border-gray-100 last:border-0">
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {project.title.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{project.title}</p>
                      <p className="text-light">{project.slug}</p>
                    </div>
                  </div>
                </td>
                <td className="p-3">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    {project.status}
                  </span>
                </td>
                <td className="p-3">{project.createdDate}</td>
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/admin/projects/edit/${project.id}`}
                      className="rounded border border-primary p-1 text-primary hover:bg-primary hover:text-white"
                    >
                      <i className="fa-solid fa-pen" />
                    </Link>
                    <button
                      onClick={() => handleDelete(project.id)}
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

      <div className="mt-6 flex items-center justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-100 text-sm hover:bg-primary hover:text-white first:bg-primary first:text-white"
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;