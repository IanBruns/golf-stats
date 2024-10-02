export async function get(endpoint) {
  const res = await fetch(endpoint)
  const data = await res.json()
  return data
}
