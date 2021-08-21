import React, {Component} from 'react';
import ProjectLink from './ProjectLink';

class ProjectItem extends Component {

    render(){
        
       

        return (
            

            <div>
                <h2>{this.props.item.name}</h2>
                
                {/* <iframe width="300" height="300" src={this.props.item.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe> */}
                <img className="projectItem" src={this.props.item.img} alt={this.props.item.name} />
                <p>{this.props.item.desc}</p>
                {this.props.item.links.map((link)=> 
                <ProjectLink link = {link}  />)}
              
                



            </div>
        )
    }
}



export default ProjectItem;