import { redirect } from "next/navigation"

import { site } from "@/types/reports"
import { getSites } from "@/lib/consumer"

export default async function RealTimeSAPage() {
  const sites: site[] = await getSites()
  const superSite = sites.filter((site) => site.site_type === "SUPER_SITE")[0]
  redirect(`/dashboard/realtime-sa/${superSite.id}`)
}
