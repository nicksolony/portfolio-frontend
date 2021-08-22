import React, {Component} from 'react'

class Skills extends Component {
    render() {
        return ( 
        <div id="Skills" className="component">
            <h2>Technical Skills</h2>
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