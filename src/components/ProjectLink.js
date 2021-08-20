import React from 'react';

const ProjectLink = (ic) => {
    
    let icon={};
    
    switch (ic.link.type) {
        case 'live':
            icon.url = "../imgs/web.svg";
            icon.alt = "Live version";
            break;
        case 'git':
            icon.url = "../imgs/git.png";
            icon.alt = "GitHub";
            break;
        case 'youtube':
            icon.url = "../imgs/youtube.png";
            icon.alt = "Demo Recording";
            break;
        case 'blog':
            icon.url = "../imgs/blog.png";
            icon.alt = "Blog Post";
            break;
        default:
    }

    return (
        <a href={ic.link.url}><img src={icon.url} alt={icon.alt} width="30px"/></a>
    )

}

export default ProjectLink;