import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
function Navbar(){

    
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/movie1" activeStyle>
                        Movie1
                    </NavLink>
                    <NavLink to="/movie2" activeStyle>
                        Movie2
                    </NavLink>
                    <NavLink to="/movie3" activeStyle>
                        Movie3
                    </NavLink>
                    <NavLink to="/movie4" activeStyle>
                        Movie4
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;