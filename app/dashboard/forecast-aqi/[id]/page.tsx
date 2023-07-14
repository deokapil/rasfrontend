import React from "react"
import { getUnixTime, parseISO } from "date-fns"

import { RealTimeAQI } from "@/types/reports"
import { getReports } from "@/lib/getReports"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BarChartComponent from "@/components/charts/BarChartComponent"
import AQICharts from "@/components/charts/RasCharts/AQICharts"
import { CalendarDateRangePicker } from "@/components/reports/DateRangePicker"

type Props = {}

const SiteDashbard = async (props: Props) => {
  const saData: Promise<RealTimeAQI[]> = getReports({
    site: "1",
    type: "realtime_aqi",
    duration: "24",
  })
  const data = await saData
  console.log(data)
  const barData = data.map((item) => {
    return {
      name: Date.parse(item.bucket),
      y: Math.floor(item["Aqi"]),
    }
  })
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button></Button>
        </div>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics" disabled>
            Analytics
          </TabsTrigger>
          <TabsTrigger value="reports" disabled>
            Reports
          </TabsTrigger>
          <TabsTrigger value="Devices" disabled>
            Devices
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <AQICharts data={barData} title="Real Time AQI for last 24 Hrs" />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default SiteDashbard
