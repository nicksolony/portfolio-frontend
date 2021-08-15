import React, {Component} from 'react'
import NavItem from './NavItem'

//https://www.w3schools.com/howto/howto_js_topnav_responsive.asp review this to get reponsive top nav

class NavBar extends Component {
    render() {
        return ( 
            <div id='Navbar'>
            
                <NavItem item="Home" tolink="/#"/>
                <NavItem item="About Me" tolink="/#About"/>
                <NavItem item="Skills" tolink="/#Skills"/>
                <NavItem item="Projects" tolink="/#Projects"/>
                <NavItem item="Resume" tolink="/#Resume"/>
                <NavItem item="Contact Me" tolink="/#Contact"/>
                {/* <a href="javascript:void(0);" class="icon" onclick="openMenu()">
                    <i class="fa fa-bars"></i>
                </a> */}
            

            
        </div>
        )
    }
}

export default NavBar

