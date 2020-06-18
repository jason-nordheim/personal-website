import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

import { styles } from '../styles/main'
import { data } from '../data/data'
import { grid  as myGrid} from '../helpers'

export default function Goals() {
    return (
        <Grid item sm={12} justify={"center"}>
            <Paper variant="elevation" elevation={1}>
                <Grid styles={styles.container} container>
                    <Grid   item 
                            sm={myGrid.sm.left} 
                            xs={myGrid.xs.left}></Grid>
                            <Grid 
                                styles={styles.container} 
                                item 
                                sm={myGrid.sm.center} 
                                xs={myGrid.xs.center}>
                                <Grid container> 
                                    <Grid item sm={myGrid.sm.center} xs={myGrid.xs.center} styles={{alignContent: 'center'}}>  
                                        <Paper square styles={styles.container}>
                                            <Grid container justify="center" >
                                                <Grid item sm={3}></Grid>
                                                <Grid item sm={6} >
                                                    <Typography variant={"h2"}>Goals</Typography>
                                                </Grid>
                                                <Grid item sm={3}></Grid>


                                                <Grid item sm={12}>
                                                    
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm={myGrid.sm.right} xs={myGrid.xs.right}></Grid>
                        </Grid>
                    </Paper>
                </Grid>
            )
}
