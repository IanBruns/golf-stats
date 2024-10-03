export async function get(endpoint) {
  const res = await fetch(endpoint, { cache: "no-store" })
  const data = await res.json()
  return data
}

export async function post(endpoint, content) {
  const body = JSON.stringify(content)
  await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  })
}
