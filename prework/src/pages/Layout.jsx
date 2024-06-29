import { Outlet, Link } from "react-router-dom";
import Navbar from '../components/Navbar.jsx';

const Layout = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;