"use client";

import Link from "next/link";
import { useSidebar } from "@/app/context/SidebarContext";

const Topbar = () => {
  const { toggleSidebar } = useSidebar();

  const handleLogout = () => {
    // TODO: connect to API
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-white px-6">
      <button onClick={toggleSidebar} className="lg:hidden">
        <i className="fa-solid fa-bars text-xl" />
      </button>

      <div className="ml-auto flex items-center gap-4">
        <Link
          href="/"
          target="_blank"
          className="flex items-center gap-2 text-sm text-light hover:text-primary"
        >
          <i className="fa-solid fa-arrow-up-right-from-square" />
          View site
        </Link>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm text-white transition-colors duration-200 ease-in-out hover:bg-secondary"
        >
          <i className="fa-solid fa-right-from-bracket" />
          Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;