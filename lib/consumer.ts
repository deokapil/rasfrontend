export async function getSites() {
  const response = await fetch(`${process.env.SERVER_API_URL}/device/sites`, {
    next: { revalidate: 30 },
  });

  return response.json();
}
