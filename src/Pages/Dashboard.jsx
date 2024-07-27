import { Link, Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <div>
      <nav>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact </Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <Outlet />
      </nav>
    </div>
  )
}
export default Dashboard