import React, {Component} from 'react'
import NavItem from './NavItem'
import Logo from './Logo'

class NavBar extends Component {
    render() {
        return ( 
            <div >
            <ul id='Navbar'>
                <li><NavItem item="Home" tolink="/#"/></li>
                <li><NavItem item="About Me" tolink="/#About"/></li>
                <li><NavItem item="Skills" tolink="/#Skills"/></li>
                <li><NavItem item="Projects" tolink="/#Projects"/></li>
                <li><NavItem item="Resume" tolink="/#Resume"/></li>
                <li><NavItem item="Contact Me" tolink="/#Contact"/></li>
            </ul>
        </div>
        )
    }
}

export default NavBar

