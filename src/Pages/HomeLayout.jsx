import { Link, Outlet } from "react-router-dom"
import Footer from "./Footer"
import { useState } from "react"

const HomeLayout = () => {
  console.log('first')
 const [activeLink, setActiveLink] = useState({
   home: false,
   about: false,
   newsLetter: false,
 })

const handleClick = (str) => {
  switch (str) {
    case 'home':
      setActiveLink({ home: true, about: false, newsLetter: false })
      break
    case 'about':
      setActiveLink({ home: false, about: true, newsLetter: false })
      break
    case 'newsLetter':
      setActiveLink({ home: false, about: false, newsLetter: true })
      break
    default:
      setActiveLink({ home: false, about: false, newsLetter: false })
      break
  }
}
console.log(activeLink.newsLetter)
  return (
    <div>
      <nav className="nav-items display-flex-center">
        <div className="logo">MixMaster</div>
        <div className="display-flex-center nav-links ">
          <li>
            <Link
              to="/"
              onClick={() => handleClick('home')}
              className={
                activeLink.home ? 'nav-item nav-item-color' : 'nav-item'
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => handleClick('about')}
              className={
                activeLink.about ? 'nav-item nav-item-color' : 'nav-item'
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/newsletter"
              onClick={() => handleClick('newsLetter')}
              className={
                activeLink.newsLetter ? 'nav-item nav-item-color' : 'nav-item'
              }
            >
              NewsLetter
            </Link>
          </li>
        </div>
      </nav>

      <Outlet />
      <Link to="/footer">
        <Footer />
      </Link>
    </div>
  )
}
export default HomeLayout