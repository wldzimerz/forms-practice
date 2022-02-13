import { NavLink } from 'react-router-dom';

import './style.css';

function NavBar() {
  return (
    <nav>
      <NavLink to='/'>Log in</NavLink> | 
      <NavLink to='/registration'>Registration</NavLink> | 
      <NavLink to='/resetpassword'>Change password</NavLink>
    </nav>
  );
}

export default NavBar;
