import { render as rtlRender, screen } from "@testing-library/react"
import HomePage from "./page"

describe("HomePage", () => {
  let render

  beforeEach(() => {
    render = () => rtlRender(<HomePage />)
  })

  it("renders", () => {
    render()
    expect(screen.getByText("Home Page")).toBeInTheDocument()
  })
})
