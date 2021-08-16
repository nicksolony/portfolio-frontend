import React, {Component} from 'react'

class Skills extends Component {
    render() {
        return ( 
        <div id="Skills">
            <h2>TECHNICAL SKILLS</h2>
            <ul>
                {this.props.skills.map(skill => {
                    return <li>{skill}</li>
                //   <li>{skill}</li>  
                })}
            </ul>
        </div>
        )
    }
}

export default Skills