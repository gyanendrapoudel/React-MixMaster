import { Link, Outlet } from "react-router-dom"

const Error = () => {
  const homeLink = {
          background: '#EB5B00',
          padding: '1rem 2rem',
          borderRadius: '1rem',
          color: 'white',
        }
  return (
    <div className="pages error-page">
      <h4 style={{ fontSize: '2rem', color: "#EB5B00" }}>Page not Found !</h4>
      <Link
        to="/"
        className="nav-item"
        style={homeLink}
      >
        Go back to Home
      </Link>
    </div>
  )
}
export default Error