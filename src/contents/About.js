import React, {Component} from 'react'

class Skills extends Component {
    render() {
        return ( 
        <div id="About">
            <h2>About me</h2>
            <p>{this.props.content}</p>
        </div>
        )
    }
}

export default Skills