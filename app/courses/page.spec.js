import { render as rtlRender, screen } from "@testing-library/react"
import CoursesPage from "./page"

jest.mock("./api", () => ({
  getCourses: jest.fn(() =>
    Promise.resolve({
      page: 1,
      perPage: 30,
      totalItems: 1,
      totalPages: 1,
      items: [
        {
          collectionId: "6xadrkr9u6720n7",
          collectionName: "matches",
          created: "2024-10-02 15:11:35.913Z",
          id: "s56pcp9estgywnn",
          matchName: "foo",
          updated: "2024-10-02 15:11:35.913Z",
        },
      ],
    })
  ),
}))

describe("CoursesRoute", () => {
  let render

  beforeEach(async () => {
    const jsx = await CoursesPage()
    render = () => rtlRender(jsx)
  })

  it("renders", async () => {
    render()
    expect(await screen.findByText("foo")).toBeInTheDocument()
  })
})
