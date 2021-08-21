import React from 'react';

const ResumeProjects = (data) => {
    
    return (
        <div>
            <h3>Technical Projects</h3>
            {data.projects.map(project => {
                let gitLink= project.links.find(({type})=>type==='git').url;            

                return <div>
                    <p>{project.name} - <a href={gitLink}>Github</a></p>
                    <br/>
                </div>
                    
            })}
        </div>
    )

}

export default ResumeProjects;