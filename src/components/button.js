import React from "react"
import { Link } from "gatsby"

const Button = ({ to, secondary, children }) => {
  return (
    <Link
      className={`button button--${secondary ? "secondary" : "primary"}`}
      to={to}
    >
      {children}
    </Link>
  )
}

export default Button
