import React, {Component} from 'react'
import NavItem from './NavItem'

class NavBar extends Component {
    render() {
        return ( 
            <div id='Navbar'>
            <ul>
                <li><NavItem item="Home" tolink="/#"/></li>
                <li><NavItem item="About Me" tolink="/#About"/></li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Resume</li>
                <li>Contact Me</li>
            </ul>
        </div>
        )
    }
}

export default NavBar

