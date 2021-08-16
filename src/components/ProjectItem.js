import React, {Component} from 'react';

class ProjectItem extends Component {
    render(){
        return (
            <div>
                <h2>{this.props.item.name}</h2>
                
                <iframe width="300" height="300" src={this.props.item.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
                <p>{this.props.item.desc}</p>
                
                <a href={this.props.item.live}><img src="../imgs/web.svg" alt="Live version" width="30px"/></a>
                <a href={this.props.item.git}><img src="../imgs/git.png" alt="Live version" width="30px"/></a>
                <a href={this.props.item.youtube}><img src="../imgs/youtube.png" alt="Live version" width="30px"/></a>
                <a href={this.props.item.blog}><img src="../imgs/blog.png" alt="Live version" width="30px"/></a>
              



            </div>
        )
    }
}

export default ProjectItem;