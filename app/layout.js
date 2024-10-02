import Link from "next/link"

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <main>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/courses">Courses</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  )
}
