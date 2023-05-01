import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/catalog">Catalog</Link>
            </li>
            <li>
                <Link to="/customer">Customer</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar