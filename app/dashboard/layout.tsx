"use client"
import Sidebar from "@/components/Sidebar";
import { SiteHeader } from "@/components/site-header"
import { useState } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
			  <main>
        <SiteHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">{children}</div>
        </main>

  )
}
