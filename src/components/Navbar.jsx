import { Link } from "react-router-dom"

// Starting with upper case to declare its a custom component in react.
const Navbar=()=>{
return (<nav>
<ul>
  <li>
    <Link to="/home">Home</Link>
  </li>
  <li>
    <Link to="/Store">Store</Link>
  </li>
</ul>
</nav>)
}

export default Navbar