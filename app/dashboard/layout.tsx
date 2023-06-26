import { getSites } from "@/lib/consumer"
import BaseLayout from "@/components/reports/BaseLayout"

interface DashboardLayoutProps {
  children: React.ReactNode
}
export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <BaseLayout>
      <div
        id="main-content"
        className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
      >
        <main>{children}</main>
      </div>
    </BaseLayout>
  )
}
