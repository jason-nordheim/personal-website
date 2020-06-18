import React from 'react'
import { Grid, Typography, List, ListItem, ListItemText, Paper} from '@material-ui/core'

import { styles } from '../styles/main'

const grid = {
    xs: {
        left: 0, 
        center: 12, 
        right: 0
    }, 
    sm: {
        left: 1, 
        center: 10, 
        right: 1 
    }
}

const item = {
    title: {
        xs: 12, 
        sm: 2
    }, 
    value: {
        xs:12, 
        sm: 10
    }
}

export default function ExperienceCard({ experience }) {
    return (
        <Paper variant="elevation" style={styles.experience} elevation={2}>
            <Grid container>
                <Grid item xs={12}>
                    <Paper variant="outlined">
                        <Grid container> 
                        <Grid item sm={grid.sm.left} xs={grid.xs.left}></Grid>
                            <Grid item sm={grid.sm.center} xs={grid.xs.center}> 
                                <Grid container>
                                    <Grid   item 
                                            sm ={item.title.sm} 
                                            xs={item.title.xs} > 
                                        <Typography styles={styles.stat} variant={"body1"}>
                                            Title
                                        </Typography>
                                    </Grid>
                                    <Grid   item
                                            sm={item.value.sm} 
                                            xs={item.value.xs} >
                                        <List>
                                            <ListItem>
                                                <ListItemText>
                                                    <Typography variant={"body2"}>
                                                        {experience.title}
                                                    </Typography> 
                                                </ListItemText>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid> 
                            </Grid>
                            <Grid item sm={grid.sm.right} xs={grid.xs.right}></Grid>
                        </Grid>
                    </Paper>
                </Grid>
                
                
                <Grid item xs={12}>
                    <Paper variant="outlined">
                        <Grid container>
                            <Grid item sm={grid.sm.left} xs={grid.xs.left}></Grid>
                            <Grid item sm={grid.sm.center} xs={grid.xs.center}> 
                                <Grid container>
                                    <Grid   item 
                                            justify="center"
                                            sm={item.title.sm} 
                                            xs={item.title.xs} > 
                                        <Typography variant={"body1"}>
                                            Address
                                        </Typography>
                                    </Grid>
                                    <Grid   item
                                            sm={item.value.sm} 
                                            xs={item.value.xs} >
                                            <List dense>
                                            <ListItem>
                                                <ListItemText>
                                                <Typography variant="body2">
                                                        {experience.address.street}, 
                                                    </Typography>
                                                    <Typography variant="body2">
                                                    {experience.address.city}, {experience.address.state} {experience.address.zip}
                                                    </Typography>
                                                </ListItemText>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid> 
                            </Grid>
                            <Grid item sm={grid.sm.right} xs={grid.xs.right}></Grid>
                        </Grid>
                    </Paper>
                </Grid>
                


                <Grid item xs={12}>
                    <Paper variant="outlined">
                        <Grid container>
                            <Grid item sm={grid.sm.left} xs={grid.xs.left}></Grid>
                            <Grid item sm={grid.sm.center} xs={grid.xs.center}> 
                                <Grid container>
                                    <Grid   item 
                                            sm={item.title.sm} 
                                            xs={item.title.xs} > 
                                        <Typography styles={styles.stat} variant="body1">
                                            Responsibilities
                                        </Typography>
                                    </Grid>
                                    <Grid   item
                                            sm={item.value.sm} 
                                            xs={item.value.xs} >
                                        <List dense>
                                            {
                                                experience.responsibilities.map(r => {
                                                    return (
                                                        <ListItem>
                                                            <ListItemText>
                                                                {r}
                                                            </ListItemText>
                                                        </ListItem>
                                                    )
                                                })
                                            }
                                        </List>
                                    </Grid>
                                </Grid> 
                            </Grid>
                            <Grid item sm={grid.sm.right} xs={grid.xs.right}></Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    )
}
