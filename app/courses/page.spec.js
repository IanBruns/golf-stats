import { render as rtlRender, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import CoursesPage from "./page"
import { postCourse } from "./api"

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
  postCourse: jest.fn(() => Promise.resolve(200)),
}))

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      refresh: () => null,
    }
  },
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

  describe("creating a course", () => {
    it("allows user to create new request", async () => {
      render()
      await userEvent.click(await screen.findByText("Create"))
      await userEvent.type(await screen.findByLabelText("Match Name"), "bar")
      await userEvent.click(await screen.findByText("Submit"))
      expect(postCourse).toHaveBeenCalledWith({ matchName: "bar" })
    })

    it("disables the submit button until title is entered", async () => {
      render()
      await userEvent.click(await screen.findByText("Create"))
      expect(await screen.findByText("Submit")).toBeDisabled()
      await userEvent.type(screen.getByLabelText("Match Name"), "bar")
      expect(await screen.findByText("Submit")).not.toBeDisabled()
    })
  })
})
