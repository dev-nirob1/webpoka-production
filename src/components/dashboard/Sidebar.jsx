"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "../ui";
import { useSidebar } from "@/app/context/SidebarContext";

const navGroups = [
  {
    label: "Main",
    items: [
      { label: "Dashboard", href: "/admin", icon: "fa-solid fa-gauge" },
      { label: "Users", href: "/admin/users", icon: "fa-solid fa-users" },
    ],
  },
  {
    label: "Content",
    items: [
      { label: "Pages", href: "/admin/pages", icon: "fa-solid fa-file" },
      { label: "Blogs", href: "/admin/blogs", icon: "fa-solid fa-newspaper" },
      {
        label: "Services",
        href: "/admin/services",
        icon: "fa-solid fa-briefcase",
      },
      {
        label: "Projects",
        href: "/admin/projects",
        icon: "fa-solid fa-diagram-project",
      },
      {
        label: "Categories",
        href: "/admin/categories",
        icon: "fa-solid fa-tags",
      },
    ],
  },
  {
    label: "System",
    items: [
      { label: "Settings", href: "/admin/settings", icon: "fa-solid fa-gear" },
    ],
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <>
      {isOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 z-40 bg-dark/50 lg:hidden"
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 -translate-x-full overflow-y-auto border-r border-border bg-white transition-transform duration-300 ease-in-out lg:translate-x-0",
          isOpen && "translate-x-0",
        )}
      >
        <div className="flex items-center justify-between border-b border-border p-4">
          <Image
            src="/images/logo.png"
            alt="Webpoka"
            className="h-auto w-[90%]"
            width={160}
            height={50}
          />
          <button onClick={closeSidebar} className="lg:hidden">
            <i className="fa-solid fa-xmark text-xl" />
          </button>
        </div>

        <nav className="p-4">
          {navGroups.map((group) => (
            <div key={group.label} className="mb-6">
              <p className="mb-2 px-2 font-bold uppercase text-light">
                {group.label}
              </p>
              <ul>
                {group.items.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeSidebar}
                        className={cn(
                          "flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-200 ease-in-out hover:bg-primary/10 hover:text-primary",
                          isActive &&
                            "bg-primary text-white hover:bg-primary hover:text-white",
                        )}
                      >
                        <i className={item.icon} />
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
