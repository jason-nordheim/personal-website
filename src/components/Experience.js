import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

import ExperienceCard from './ExperienceCard'

import { styles } from '../styles/main'
import { data } from '../data/data'

export default function Experience() {
    return (
        <Grid item sm={12}>
            <Grid container>
                <Grid item sm={1} md={2}></Grid>
                <Grid styles={styles.container} item sm={10} md={8}>
                    <Grid container> 
                        <Grid item sm={12} md={10}> 
                            <Paper square styles={styles.container}>
                                <Typography variant={"h2"}>Experience</Typography>
                                {
                                    data.experience.map(e => <ExperienceCard experience={e} /> )
                                }
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={1} md={2}></Grid>
            </Grid>
        </Grid>
    )
}
