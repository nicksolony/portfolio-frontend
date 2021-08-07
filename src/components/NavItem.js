import React, {Component} from 'react';
import { HashLink } from 'react-router-hash-link';

const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -180; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

class NavItem extends Component {
    render(){
        return (
            <div className="NavItem">
                {/* <Link to={this.props.tolink}>
                {this.props.item}
                </Link> */}

                <HashLink smooth to={this.props.tolink} scroll={el => scrollWithOffset(el)}>
                {this.props.item}
                </HashLink>
            </div>
        )
    }
}

export default NavItem;