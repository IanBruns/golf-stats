"use client"

import { useState } from "react"

import { postCourse } from "./api"

export default function CreateEvent() {
  const [creating, setCreating] = useState(false)
  const [matchName, setMatchName] = useState("")

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
