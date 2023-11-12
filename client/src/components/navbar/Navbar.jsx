import "./navbar.css"
//import Assest from './assest/logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
        <a class="navbar-brand" routerLink="">
        <span className="logo">lamabooking</span>
        </a>
            <div className="navItem">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar