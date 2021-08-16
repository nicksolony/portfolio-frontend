import React, {Component} from 'react';

class ProjectItem extends Component {
    render(){
        return (
            <div>
                <h2>{this.props.item.name}</h2>
                <img src={this.props.item.img} alt="" />
                <img src="../imgs/Logo.png" alt="" height="100px" width="100px"/>
            </div>
        )
    }
}

export default ProjectItem;