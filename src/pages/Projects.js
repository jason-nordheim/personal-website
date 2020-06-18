import React from 'react'
import { Grid, Card } from '@material-ui/core'
import ProjectCard from '../components/ProjectCard'
import { data } from '../data/data'

export default function Projects() {
    return (
        <Grid item xs={12}> 
            <Gutter>
                <ProjectCard /> 
                <ProjectCard /> 
                <ProjectCard /> 
                <ProjectCard /> 
                { data.projects.map(p => <ProjectCard key={p.title} project={p}/> )}
            </Gutter>
        </Grid>
    )
}


function Gutter() {
    return <Grid item xs={1} sm={2}></Grid>
}