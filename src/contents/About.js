import React, {Component} from 'react'

class Skills extends Component {
    render() {
        return ( 
        <div id="About" className="component row">
            <div className="left">
            <h2><img src="./imgs/photo.png" alt="Profile" className="photo" />About me</h2>
            <p>{this.props.content}</p>
            </div>
            <div className="right">
                <img src="./imgs/BG3.gif" alt="" />
            </div>
        </div>
        )
    }
}

export default Skills