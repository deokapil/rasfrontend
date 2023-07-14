export async function getSites() {
  console.log(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/device/site`)
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/device/site`,
    {
      next: { revalidate: 30 },
      headers: {
        Authorization: `Api-Key ${process.env.NEXT_PUBLIC_API_SERVER_KEY}`,
      },
    }
  )

  return response.json()
}
