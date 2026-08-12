// app/admin/layout.js

import { SidebarProvider } from "@/app/context/SidebarContext";
import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

const AdminLayout = ({ children }) => {
  return (
    <SidebarProvider>
    <div className="min-h-screen bg-light/30">
      <Sidebar />
      <div className="lg:ml-64">
        <Topbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
    </SidebarProvider>
  );
};

export default AdminLayout;