import { Link } from "gatsby"
import React from "react"

const Menu = () => (
  <ul
    style={{
      display: 'flex',
      margin: 'auto 0',
      listStyle: 'none',
    }}
  >
    <li>
      <Link
        to="/"
        style={{
          color: `#ddd`,
          padding: '0 0.5rem',
        }}
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        to="/blog"
        style={{
          color: `#ddd`,
          padding: '0 0.5rem',
        }}
      >
        Blog
      </Link>
    </li>
    <li>
      <Link
        to="/about"
        style={{
          color: `#ddd`,
          padding: '0 0.5rem',
        }}
      >
        About
      </Link>
    </li>
  </ul>
)

export default Menu
