import { NextResponse } from "next/server"
import { getDashBoardReports, getReports } from "lib/getReports"

import { DashboardData } from "@/types/reports"

export async function GET(request: Request) {
  const report: DashboardData = await getDashBoardReports()

  return NextResponse.json({ report })
}
