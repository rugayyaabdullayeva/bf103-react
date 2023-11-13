import React from 'react'
import Project from '../../../components/Project'

const Projects = () => {
    const projects = [{
        id:1,
        title:"Featured title",
        image:"https://www.w3schools.com/w3images/house5.jpg"
    },
    {
        id:2,
        title:"Brick House",
        image:"https://www.w3schools.com/w3images/house2.jpg"
    },
    {
        id:3,
        title:"Renovated",
        image:"https://www.w3schools.com/w3images/house3.jpg"
    },
    {
        id:4,
        title:"Barn House",
        image:"https://www.w3schools.com/w3images/house5.jpg"
    }
]
  return (
    <div className='container'>
        <div className="row">
            {
                projects.map((project,index,projects)=>{
                    return (
                        <div className="col-3">
                        <Project key={index} project={project}/>
                    </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Projects