import { Link, Outlet, useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError()
  const homeLink = {
          background: '#EB5B00',
          padding: '1rem 2rem',
          borderRadius: '1rem',
          color: 'white',
          }
      if(error.status===404){
        return (
          <>
            <div className="pages error-page">
              <h4 style={{ fontSize: '2rem', color: '#EB5B00', marginBottom:"2rem" }}>
                Page not Found !
              </h4>
              <Link to="/" className="nav-item" style={homeLink}>
                Go back to Home
              </Link>
            </div>
          </>
        )
      }
  return (
    <div className="pages error-page">
      <h4 style={{ fontSize: '2rem', color: "#EB5B00" }}>something Went wrong !</h4>
    </div>
  )
}
export default Error