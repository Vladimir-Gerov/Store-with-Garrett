import {Outlet, Link} from "react-router-dom";


function Navbar() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="./pages/Home">Home</Link>
            </li>
            <li>
              <Link to="/Store">Store</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Outlet />
      </div>
    );
  }

  export default Navbar