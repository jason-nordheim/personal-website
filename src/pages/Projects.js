import React from 'react'
import { Grid, Card, Paper, List, ListItem, ListItemText, CardContent, Typography} from '@material-ui/core'
import { data } from '../data/data'
import { styles } from '../styles/main'

export default function Projects() {
    return (
        <Grid item xs={12}> 
            <Paper>
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <Grid container justify="center">
                            <Typography variant="h3">Jason's Projects</Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        <Grid container justify="center" spacing={3} styles={{flexGrow: 1}}>
                            { data.projects.map(p => <ProjectCard key={p.title} project={p}/> )}
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

function ProjectCard({ project }) {
    const goToProject = event => {
        window.location.href = project.url  
    }
    return (
        <Grid item xs={10} sm={5} styles={styles.projectCardContainer}>
            <Card itemType="button" onClick={goToProject}>
                <CardContent>
                    <List>
                        <ListItem>
                            <ListItemText>
                                <Typography variant="subtitle1">{project.title}</Typography>
                                <Typography variant="subtitle2">Category: {project.category}</Typography>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                <Typography variant="body1" color="secondary">Technologies</Typography>
                                { project.technologies.map(t => {
                                        return (
                                            <ul>
                                                <li>
                                                    <Typography color="primary" variant="body2">{t}</Typography>
                                                </li>
                                            </ul>
                                        )
                                })}
                            </ListItemText>
                        </ListItem>
                    </List>
                    <Typography variant="caption">Click anywhere on this card to go to repo</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}
