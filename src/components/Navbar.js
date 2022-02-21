import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './Navbarcomponents';

function Navbar () {
       return (
              <>
              <Nav>
                     <NavLink to="/" >
                            
                     </NavLink>
                     <Bars/>
                     <NavMenu>
                            <NavLink to="/" activeStyle >Home</NavLink>
                            <NavLink to="/details/:id" activeStyle >Details</NavLink>
                     </NavMenu>
                     <NavBtn>
                            <NavBtnLink to="/login"  >Login</NavBtnLink>
                     </NavBtn>
              </Nav>
              </>
       );
}
export default Navbar;
