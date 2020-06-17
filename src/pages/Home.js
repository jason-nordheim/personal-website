import React from 'react'
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core'

const styles = makeStyles({
    root:{
        margin: '10px'
    }, 
})

export default function Home() {
    return (
        <div className="home">
            <Grid container spacing={3}>
                <Grid className={styles.root} item xs={12}>
                    <Paper>
                        <Typography variant={"h1"}>Jason Nordheim</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}
