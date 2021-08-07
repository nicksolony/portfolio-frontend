import React, {Component} from 'react';
import { NavHashLink } from 'react-router-hash-link';


const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -180; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

class NavItem extends Component {
    render(){
        return (
            <div className="NavItem">
                
                    <NavHashLink smooth to={this.props.tolink} 
                        activeClassName="active" 
                        activeStyle={{ color: 'red' }}
                        scroll={el => scrollWithOffset(el)} activeClassName="selected"
                    >
                {this.props.item}
                </NavHashLink>
            </div>
        )
    }
}

export default NavItem;