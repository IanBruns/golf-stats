"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { postCourse } from "./api"

export default function CreateEvent() {
  const [creating, setCreating] = useState(false)
  const [matchName, setMatchName] = useState("")

  const router = useRouter()

  const handleCreate = () => {
    setCreating(true)
  }

  const handleCancel = () => {
    setCreating(false)
  }

  const handleTitleChange = e => {
    setMatchName(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    await postCourse({ matchName })
    setMatchName("")
    setCreating(false)

    router.refresh()
  }

  return (
    <>
      {creating ? (
        <>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Match Name</label>
            <input id="name" onChange={handleTitleChange} value={matchName} />
            <input type="submit" value="Submit" disabled={!matchName.length} />
          </form>
          <button onClick={handleCancel}>Never mind</button>
        </>
      ) : (
        <button onClick={handleCreate}>Create</button>
      )}
    </>
  )
}
