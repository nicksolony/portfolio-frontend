import React, {Component} from 'react'

class Skills extends Component {
    render() {
        return ( 
        <div id="Skills" className="component row">
            <div className="left">
                <img src="./imgs/gear_skills.png" alt="" />
                <h2>Technical <br/> Skills</h2>
            </div>
            <div className="right">
                <ul>
                    {this.props.skills.map(skill => {
                        return <li>{skill}</li>
                    //   <li>{skill}</li>  
                    })}
                </ul>
            </div>
        </div>
        )
    }
}

export default Skills