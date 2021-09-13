import React, {Component} from 'react'

class Skills extends Component {
    render() {
        return ( 
        <div id="About" className="component">
            <h2><img src="./imgs/photo.png" alt="Profile" className="photo" />
            About me</h2>
            <p>{this.props.content}</p>
        </div>
        )
    }
}

export default Skills