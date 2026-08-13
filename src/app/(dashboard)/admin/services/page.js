import Link from "next/link";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import DashboardPageTitle from "@/components/dashboard/DashboardPageTitle";

const services = [
  { id: 1, title: "Digital Marketing", slug: "/digital-marketing", status: "Published", createdDate: "Aug 13, 2026" },
  { id: 2, title: "Cloud Solutions", slug: "/cloud-solutions", status: "Published", createdDate: "Aug 13, 2026" },
  { id: 3, title: "SEO Optimization", slug: "/seo-optimization", status: "Published", createdDate: "Aug 13, 2026" },
  { id: 4, title: "UI/UX Design", slug: "/ui-ux-design", status: "Published", createdDate: "Aug 13, 2026" },
  { id: 5, title: "Mobile Apps", slug: "/mobile-apps", status: "Published", createdDate: "Aug 13, 2026" },
  { id: 6, title: "Web Development", slug: "/web-development", status: "Published", createdDate: "Aug 13, 2026" },
];

const stats = [
  { label: "Total", value: 6 },
  { label: "Published", value: 6 },
  { label: "Drafts", value: 0 },
];

const ServicesPage = () => {
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <DashboardPageTitle title="Services" description="Manage the services your business offers" />
        <Link href="/admin/services/create">
          <Button variant="secondary" className="rounded px-4 py-3">
            <i className="fa-solid fa-plus" />
            Add Service
          </Button>
        </Link>
      </div>

      <div className="mb-6 grid gap-4 grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-gray-100 bg-white p-4">
            <p className="text-sm text-light">{stat.label}</p>
            <p className="mt-1 text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="mb-6 flex flex-wrap items-end gap-4 rounded-lg border border-gray-100 bg-white p-4">
        <div className="flex-1 min-w-50">
          <label className="mb-1 block text-sm font-medium">Search</label>
          <Input type="text" placeholder="Search by title or description..." className="mb-0" />
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
              <th className="p-3 font-medium">Title & Icon</th>
              <th className="p-3 font-medium">Status</th>
              <th className="p-3 font-medium">Created Date</th>
              <th className="p-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="border-b border-gray-100 last:border-0">
                <td className="p-3">
                  <p className="font-medium">{service.title}</p>
                  <p className="text-light">{service.slug}</p>
                </td>
                <td className="p-3">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    {service.status}
                  </span>
                </td>
                <td className="p-3">{service.createdDate}</td>
                <td className="p-3">
                  <div className="flex items-center gap-3">
                    <button className="rounded border border-primary p-1 text-primary hover:bg-primary hover:text-white">
                      <Link href={`/admin/services/edit/${service.id}`}>
                        <i className="fa-solid fa-pen" />
                      </Link>
                    </button>
                    <button className="rounded border border-alternative p-1 text-alternative hover:bg-alternative hover:text-white">
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

export default ServicesPage;