import Link from "next/link"

import "./globals.css"

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <main>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/courses">Courses</Link>
          </nav>
          <section>{children}</section>
        </main>
      </body>
    </html>
  )
}
