import { Link, Outlet, useLocation, } from "react-router-dom"
import Footer from "./Footer"
import { useState } from "react"

const HomeLayout = () => {
const location = useLocation()
  return (
    <div>
      <div className="navbar">
        <nav className="nav-items display-flex-center">
          <div className="logo">MixMaster</div>
          <div className="display-flex-center nav-links ">
            <li>
              <Link
                to="/"
                className={
                  location.pathname === '/'
                    ? 'nav-item nav-item-color'
                    : 'nav-item'
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={
                  location.pathname === '/about'
                    ? 'nav-item nav-item-color'
                    : 'nav-item'
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/newsletter"
                className={
                  location.pathname === '/newsletter'
                    ? 'nav-item nav-item-color'
                    : 'nav-item'
                }
              >
                NewsLetter
              </Link>
            </li>
          </div>
        </nav>
      </div>
      <section className="pages">
        <Outlet />
      </section>

      <Link to="/footer">
        <Footer />
      </Link>
    </div>
  )
}
export default HomeLayout