type ReportParams = {
  site: string // site Id
  type: string // valid values are realtime_sa, forecast_sa, realtime_aqi, forecast_aqi, forecast_metro
  duration?: string // like for 2 days
  start_date?: string // from
  end_date?: string // to
  bucket_size?: string
  bucket_unit?: string // valid values are days hours minutes week months
}

export async function getReports(query: ReportParams) {
  const ReportParams = new URLSearchParams(query)

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/reports?${ReportParams}`,
    {
      next: { revalidate: 30 },
      headers: {
        Authorization: `Api-Key ${process.env.NEXT_PUBLIC_API_SERVER_KEY}`,
      },
    }
  )

  return response.json()
}

export async function getDashBoardReports() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/reports/dashboard`,
    {
      next: { revalidate: 30 },
      headers: {
        Authorization: `Api-Key ${process.env.NEXT_PUBLIC_API_SERVER_KEY}`,
      },
    }
  )

  return response.json()
}
