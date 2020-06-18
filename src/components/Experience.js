import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

import ExperienceCard from './ExperienceCard'

import { styles } from '../styles/main'
import { data } from '../data/data'

const grid = {
    sm: {
        left: 0, 
        center: 12, 
        right: 0
    }, 
    md:{
        left: 1,
        center: 10, 
        right: 1 
    }
}

export default function Experience() {
    return (
        <Grid item sm={12} justify={"center"}>
            <Grid styles={styles.container} container>
                <Grid item sm={grid.sm.left} md={grid.md.left}></Grid>
                <Grid styles={styles.container} item sm={grid.sm.center} md={grid.md.center}>
                    <Grid container> 
                        <Grid item sm={grid.sm.center} md={grid.md.center} styles={{alignContent: 'center'}}>  
                            <Paper square styles={styles.container}>
                                <Grid container justify="center" >
                                    <Grid item sm={3}></Grid>
                                    <Grid item sm={6} >
                                        <Typography variant={"h2"}>Experience</Typography>
                                    </Grid>
                                    <Grid item sm={3}></Grid>


                                    <Grid item sm={12}>
                                        { data.experience.map(e => <ExperienceCard experience={e} /> ) }
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={1} md={2}></Grid>
            </Grid>
        </Grid>
    )
}
