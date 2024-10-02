import { getCourses } from "./api"

export default async function CoursesPage() {
  const courses = await getCourses()

  return (
    <div>
      {courses?.items.map(course => (
        <p key={course.id}>{course.matchName}</p>
      ))}
    </div>
  )
}
