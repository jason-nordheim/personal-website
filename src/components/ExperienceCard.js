import React from 'react'
import { Grid, Typography, List, ListItem, ListItemText, Paper} from '@material-ui/core'

import { styles } from '../styles/main'
import { grid as theGrid, item, makeDateString } from '../helpers'


export default function ExperienceCard({ experience }) {

    const startDate = makeDateString(experience.start)
    const endDate = makeDateString(experience.end)

    return (
        <Paper key={experience.title} variant="elevation" style={styles.experience} elevation={2}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Paper variant="outlined">
                        <Grid container> 
                        <Grid item sm={theGrid.sm.left} xs={theGrid.xs.left}></Grid>
                            <Grid item sm={theGrid.sm.center} xs={theGrid.xs.center}> 
                                <Grid container>
                                    <Grid   item 
                                            sm ={item.title.sm} 
                                            xs={item.title.xs} > 
                                         <List>
                                            <ListItem>
                                                <ListItemText>
                                                    <Typography variant={"body2"}>
                                                        Title
                                                    </Typography> 
                                                </ListItemText>
                                            </ListItem>
                                        </List>
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
                            <Grid item sm={theGrid.sm.right} xs={theGrid.xs.right}></Grid>
                        </Grid>
                    </Paper>
                </Grid>
                
                
                <Grid item xs={12}>
                    <Paper variant="outlined">
                        <Grid container>
                            <Grid item sm={theGrid.sm.left} xs={theGrid.xs.left}></Grid>
                            <Grid item sm={theGrid.sm.center} xs={theGrid.xs.center}> 
                                <Grid container>
                                    <Grid   item 
                                            justify="center"
                                            sm={item.title.sm} 
                                            xs={item.title.xs} > 
                                      <List>
                                            <ListItem>
                                                <ListItemText>
                                                    <Typography variant={"body2"}>
                                                        Address
                                                    </Typography> 
                                                </ListItemText>
                                            </ListItem>
                                        </List>
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
                            <Grid item sm={theGrid.sm.right} xs={theGrid.xs.right}></Grid>
                        </Grid>
                    </Paper>
                </Grid>
                


                <Grid item xs={12}>
                    <Paper variant="outlined">
                        <Grid container>
                            <Grid item sm={theGrid.sm.left} xs={theGrid.xs.left}></Grid>
                            <Grid item sm={theGrid.sm.center} xs={theGrid.xs.center}> 
                                <Grid container>
                                    <Grid   item 
                                            sm={item.title.sm} 
                                            xs={item.title.xs} > 
                                        <ListItem>
                                               <ListItemText>
                                                    <Typography variant="body2">
                                                        Responsibilities
                                                    </Typography>
                                                </ListItemText>
                                            </ListItem>
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
                            <Grid item sm={theGrid.sm.right} xs={theGrid.xs.right}></Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper variant="outlined">
                        <Grid container>
                            <Grid item sm={theGrid.sm.left} xs={theGrid.xs.left}></Grid>
                            <Grid item sm={theGrid.sm.center} xs={theGrid.xs.center}> 
                                <Grid container>
                                    <Grid   item 
                                            sm={item.title.sm} 
                                            xs={item.title.xs} > 
                                        <ListItem>
                                            <ListItemText>
                                                <Typography variant="body2">
                                                    Start date
                                                </Typography>
                                            </ListItemText>
                                        </ListItem>
                                    </Grid>
                                    <Grid   item
                                            sm={item.value.sm} 
                                            xs={item.value.xs} >
                                        <List dense>
                                            <ListItem>
                                               <ListItemText>
                                                    <Typography variant="body2">
                                                        { startDate }
                                                    </Typography>
                                                </ListItemText>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid> 
                            </Grid>
                            <Grid item sm={theGrid.sm.right} xs={theGrid.xs.right}></Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper variant="outlined">
                        <Grid container>
                            <Grid item sm={theGrid.sm.left} xs={theGrid.xs.left}></Grid>
                            <Grid item sm={theGrid.sm.center} xs={theGrid.xs.center}> 
                                <Grid container>
                                    <Grid   item 
                                            sm={item.title.sm} 
                                            xs={item.title.xs} > 
                                        <List>
                                            <ListItem>
                                                <ListItemText>
                                                    <Typography variant="body2">
                                                        End Date
                                                    </Typography>
                                                </ListItemText>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                    <Grid   item
                                            sm={item.value.sm} 
                                            xs={item.value.xs} >
                                        <List dense>
                                            <ListItem>
                                               <ListItemText>
                                                    <Typography variant="body2">
                                                        { endDate }
                                                    </Typography>
                                                </ListItemText>
                                            </ListItem>
                                        </List>
                                    </Grid>
                                </Grid> 
                            </Grid>
                            <Grid item sm={theGrid.sm.right} xs={theGrid.xs.right}></Grid>
                        </Grid>
                    </Paper>
                </Grid>



            </Grid>
        </Paper>
    )
}
