import React from 'react'
import { Grid, Typography, List, ListItem, ListItemText} from '@material-ui/core'

import { styles } from '../styles/main'

const grid = {
    container:{
        left:{
            md:1, 
            sm:0 
        }, 
        center:{
            md:10, 
            sm: 12
        },
        right:{
            md: 1, 
            sm: 0
        }
    }, 
    item: {
        property:{
            md:2, 
            sm:12
        }, 
        value:{
            md: 10, 
            sm: 12
        }
    }
}

export default function ExperienceCard({ experience }) {
    return (
        <Grid container>
            <Grid item md={grid.container.left.md} sm={grid.container.left.sm}></Grid>
            <Grid item md={grid.container.center.md} sm={grid.container.center.sm}> 
                <Grid container>
                    <Grid   item md={grid.item.property.md} 
                            sm={grid.item.property.sm} > 
                        <Typography styles={styles.stat} variant={"body1"}>
                            Title
                        </Typography>
                    </Grid>
                    <Grid   item md={grid.item.value.md} 
                            sm={grid.item.value.sm} >
                        <Typography styles={styles.stat} variant={"body2"}>
                            {experience.title}
                        </Typography>
                    </Grid>
                </Grid> 
            </Grid>
            <Grid item md={grid.container.right.md} sm={grid.container.right.sm}></Grid>
            

            <Grid item md={grid.container.left.md} sm={grid.container.left.sm}></Grid>
            <Grid item md={grid.container.center.md} sm={grid.container.center.sm}> 
                <Grid container>
                    <Grid   item md={grid.item.property.md} 
                            sm={grid.item.property.sm} > 
                        <Typography variant={"body1"}>
                            Company
                        </Typography>
                    </Grid>
                    <Grid   item md={grid.item.value.md} 
                            sm={grid.item.value.sm} >
                        <Typography variant={"body2"}>
                            {experience.company}
                        </Typography>
                    </Grid>
                </Grid> 
            </Grid>
            <Grid item md={grid.container.right.md} sm={grid.container.right.sm}></Grid>


            <Grid item md={grid.container.left.md} sm={grid.container.left.sm}></Grid>
            <Grid item md={grid.container.center.md} sm={grid.container.center.sm}> 
                <Grid container>
                    <Grid   item md={grid.item.property.md} 
                            sm={grid.item.property.sm} > 
                        <Typography variant={"body1"}>
                            Address
                        </Typography>
                    </Grid>
                    <Grid   item md={grid.item.value.md} 
                            sm={grid.item.value.sm} >
                        <Typography variant={"body2"}>
                            {experience.address.street}, 
                        </Typography>
                        <Typography variant={"body2"}>
                        {experience.address.city}, {experience.address.state} {experience.address.zip}
                        </Typography>
                    </Grid>
                </Grid> 
            </Grid>
            <Grid item md={grid.container.right.md} sm={grid.container.right.sm}></Grid>

            <Grid item md={grid.container.left.md} sm={grid.container.left.sm}></Grid>
            <Grid item md={grid.container.center.md} sm={grid.container.center.sm}> 
                <Grid container>
                    <Grid item sm={2}> 
                        <Typography styles={styles.stat} variant={"body1"}>
                            Responsibilities
                        </Typography>
                    </Grid>
                    <Grid   item md={grid.item.value.md} 
                            sm={grid.item.value.sm} >
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
            <Grid item md={grid.container.right.md} sm={grid.container.right.sm}></Grid>


        </Grid>
    )
}
