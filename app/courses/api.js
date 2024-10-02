import { get } from "../utils"

export async function getCourses() {
  return get(
    "http://127.0.0.1:8090/api/collections/matches/records?page=1&perPage=30"
  )
}
