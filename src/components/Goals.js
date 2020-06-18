import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

import { styles } from '../styles/main'
import { data } from '../data/data'
import { grid  as myGrid, capitalize, getTodoStatus} from '../helpers'

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
                                                    <Typography variant={"h2"}>Bucket List</Typography>
                                                </Grid>
                                                <Grid item sm={3}></Grid>
                                                <Grid item xs={12} sm={12}>
                                                    { Object.keys(data.personal.bucketList).map(category => {
                                                        return (
                                                            <Grid container spacing={3}>
                                                                <Grid item xs={12}>                          
                                                                    <Paper variant="outlined">
                                                                            <Typography variant="body1">{capitalize(category)} </Typography>
                                                                            {
                                                                                data.personal.bucketList[category].map(goal => {
                                                                                    const goalStr = capitalize(goal.goal)
                                                                                    const style = getTodoStatus(goal.status)
                                                                                    return (
                                                                                        <Grid item xs={12} sm={12}>
                                                                                            <Paper square>
                                                                                                <Grid container justify="center" >
                                                                                                    <Grid item xs={12} sm={8}>
                                                                                                        <Typography variant="overline" color="primary">{goalStr}</Typography>
                                                                                                    </Grid>
                                                                                                    <Grid item xs={12} sm={4}>
                                                                                                        <Typography style={style} variant="overline" >Status: {goal.status}</Typography>
                                                                                                    </Grid>
                                                                                                </Grid>
                                                                                            </Paper>
                                                                                        </Grid>
                                                                                    ) 
                                                                                })
                                                                            }
                                                                    </Paper>
                                                                </Grid>
                                                            </Grid>
                                                        )
                                                    })}
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
