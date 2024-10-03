"use client"

import { useState } from "react"

export default function CreateEvent() {
  const [creating, setCreating] = useState(false)
  const [title, setTitle] = useState("")

  const handleCreate = () => {
    setCreating(true)
  }

  const handleCancel = () => {
    setCreating(false)
  }

  const handleTitleChange = e => {
    setTitle(e.target.value)
  }

  return (
    <>
      {creating ? (
        <>
          <form>
            <label htmlFor="name">Name</label>
            <input id="name" onChange={handleTitleChange} value={title} />
            <button disabled={!title.length}>submit</button>
          </form>
          <button onClick={handleCancel}>Never mind</button>
        </>
      ) : (
        <button onClick={handleCreate}>Create</button>
      )}
    </>
  )
}
