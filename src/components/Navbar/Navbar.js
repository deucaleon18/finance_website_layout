import React from 'react'

import { Nav,NavLogo,NavContainer,MobileIcon,NavItem,NavMenu,NavLinks,NavBtn,NavBtnLink} from './NavbarElements';
// import SideBar from '../Sidebar/Sidebar';
// import MenuIcon from '@material-ui/icons/Menu';
import {FaBars} from 'react-icons/fa'
const NavBar = () => {
    return (
        <div style={{height:"80px"}}>
           <Nav>
             <NavContainer>
                 <NavLogo to ='/'>
                   dolla
                 </NavLogo>
                 <MobileIcon>
                     {/* <MenuIcon color="white"/> */}
                     <FaBars/>
                 </MobileIcon>
                 <NavMenu>
                         <NavItem>
                             <NavLinks to ="about">About</NavLinks>
                         </NavItem>
                         <NavItem>
                             <NavLinks to ="discover">Discover</NavLinks>
                         </NavItem>
                         <NavItem>
                             <NavLinks to ="services">Services</NavLinks>
                         </NavItem>
                         <NavItem>
                             <NavLinks to ="signup">Signup</NavLinks>
                         </NavItem>
                     </NavMenu>
                     <NavBtn >
                       <NavBtnLink to="/signin">
                        Sign in 
                       </NavBtnLink>
                     </NavBtn>
             </NavContainer>
           </Nav>     
        </div>
    )
}

export default NavBar;
