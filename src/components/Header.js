import React, {Component} from 'react'
import Navbar from './Navbar'
import Logo from './Logo'

class Header extends Component {
    render() {
        return ( 
        <div>
            <Logo />
            <Navbar />
        </div>
        )
    }
}

export default Header