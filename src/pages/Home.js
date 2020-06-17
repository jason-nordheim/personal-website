import React from 'react'
import { Grid, Typography, Paper } from '@material-ui/core'
import { data } from '../data/data'
import { styles } from './styles/main'


export default function Home() {
    return (
        <Grid item sm={12}>
            <Grid container>
                <Grid item sm={2}></Grid>
                <Grid item sm={8}>
                    <Paper style={styles.container}>
                        <Typography variant={"h2"} >{data.contact.firstName} {data.contact.lastName}</Typography>
                        <Typography variant={"body1"} >{data.home.subTitle}</Typography>
                        
                    </Paper>
                </Grid>
                <Grid item sm={2}></Grid>
            </Grid>
        </Grid>
    )
}
