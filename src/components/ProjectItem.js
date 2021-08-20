import React, {Component} from 'react';

class ProjectItem extends Component {

    render(){
        
        const liveLink = () => {
                if(this.props.item.live){
                  return <a href={this.props.item.live}><img src="../imgs/web.svg" alt="Live version" width="30px"/></a>
                } 
          }

        return (
            

            <div>
                <h2>{this.props.item.name}</h2>
                
                <iframe width="300" height="300" src={this.props.item.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
                <p>{this.props.item.desc}</p>
                
                {liveLink()}
                <a href={this.props.item.git}><img src="../imgs/git.png" alt="GitHub" width="30px"/></a>
                <a href={this.props.item.youtube}><img src="../imgs/youtube.png" alt="Demo Recording" width="30px"/></a>
                <a href={this.props.item.blog}><img src="../imgs/blog.png" alt="Blog Post" width="30px"/></a>
              



            </div>
        )
    }
}



export default ProjectItem;