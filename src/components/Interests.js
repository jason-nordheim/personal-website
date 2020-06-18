import React from 'react'
import { Grid, Paper, Typography  } from '@material-ui/core'

import { data } from '../data/data'
import { styles } from '../styles/main'
import { grid, item } from '../helpers'

export default function Interests() {
    return (
        <Grid item 
            sm={12} 
            justify={"center"}>
        <Paper variant="elevation" elevation={3}>
            <Grid   container 
                    styles={styles.container} >
                <Grid   item 
                        sm={grid.sm.left} 
                        xs={grid.xs.left}></Grid>
                <Grid   item 
                        styles={styles.container}  
                        sm={grid.sm.center} 
                        xs={grid.xs.center}>
                    <Grid container> 
                        <Grid   item 
                                sm={grid.sm.center} 
                                xs={grid.xs.center} >  
                            <Paper  square 
                                    styles={styles.container}>
                                <Grid   container 
                                        justify="center" >
                                    <Grid   item 
                                            sm={3}></Grid>
                                    <Grid   item 
                                            sm={6} >
                                        <Typography variant={"h2"}>Interests</Typography>
                                    </Grid>
                                    <Grid item sm={3}></Grid>   
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={1} md={2}></Grid>
            </Grid>
        </Paper>
    </Grid>
    )
}
