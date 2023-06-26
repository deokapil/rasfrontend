import Link from "next/link"
import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import AQICards from "@/components/reports/AQICards"
import MapCard from "@/components/reports/MapCard"

export default async function DashboardPage() {
  return (
    <>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button size="sm">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
        </div>
        <AQICards />
        <div className="flex items-center justify-between space-y-2">
          <MapCard />
        </div>
      </div>
    </>
  )
}
