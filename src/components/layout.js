import * as React from "react"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="page-padding">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
