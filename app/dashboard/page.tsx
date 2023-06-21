"use client"
import Link from "next/link"
import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import AQICards from "@/components/reports/AQICards"

export default function DashboardPage() {
  return (
    <>
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
          
        </div>
        <div className="flex items-center justify-between space-y-2">
            <AQICards />
          </div>
    </>
  )
}
