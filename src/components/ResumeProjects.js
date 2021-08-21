import React from 'react';

const ResumeProjects = (data) => {
    
    return (
        <div>
            <h3>Technical Projects</h3>
            {data.projects.map(project => {
                let gitLink= project.links.find(({type})=>type==='git').url;
                let liveLink= project.links.find(({type})=>type==='live') ? project.links.find(({type})=>type==='live').url : null;
                let demoLink= project.links.find(({type})=>type==='youtube').url;
                let blogLink= project.links.find(({type})=>type==='blog').url;            
                
                return <div>
                    <p> <a href={liveLink}>{project.name}</a> - <a href={gitLink}>Github</a> | <a href={demoLink}>Demo</a> | <a href={blogLink}>Blog</a><br/>
                    {project.desc}
                    
                    <ul>
                        {project.bullets.map(bullet=>{
                            return <li>{bullet}</li>
                        })}
                    </ul>
                    </p>
                </div>
                    
            })}
        </div>
    )

}

export default ResumeProjects;