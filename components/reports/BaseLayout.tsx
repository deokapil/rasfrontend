"use client"

import React, { useState } from "react"

import SideNav from "@/components/reports/SideNav"
import { SiteHeader } from "@/components/site-header"

interface BaseLayoutProps {
  children: React.ReactNode
}
const BaseLayout = ({ children }: BaseLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>
      <SiteHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <SideNav />
        {children}
      </div>
    </>
  )
}

export default BaseLayout
