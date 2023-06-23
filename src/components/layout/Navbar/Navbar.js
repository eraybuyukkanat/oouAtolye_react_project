import './Navbar.css';
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src='/images/ooulogo.jpg' width="120px" height="120px"/>
        </div>
        <div className="elements">
            <ul>
              <li><NavLink to="/" >ANASAYFA</NavLink></li>
              <li ><NavLink to="/courses" >DERSLER</NavLink></li>
              <li><NavLink to="/contact" >İLETİŞİM</NavLink></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
