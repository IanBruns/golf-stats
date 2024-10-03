import Image from "next/image"

import { getCourses } from "./api"

import "./courses.css"
import CreateEvent from "./CreateEvent"

export default async function CoursesPage() {
  const courses = await getCourses()

  return (
    <>
      <h1>All Events</h1>
      <div className="courseContainer">
        {courses?.items?.map(course => (
          <div key={course.id} className="course">
            <Image src="/golf-310994_640.png" height={25} width={25} alt="" />
            <p>{course.matchName}</p>
          </div>
        ))}
      </div>
      <CreateEvent />
    </>
  )
}
