import { SiteHeader } from "@/components/site-header"

interface DashboardLayoutProps {
  children: React.ReactNode
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">{children}</div>
    </div>
  )
}
