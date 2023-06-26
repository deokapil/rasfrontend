export async function getSites() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/device/site`,
    {
      next: { revalidate: 30 },
      headers: { Authorization: `Api-Key ${process.env.NEXT_PUBLIC_API_KEY}` },
    }
  )

  return response.json()
}
