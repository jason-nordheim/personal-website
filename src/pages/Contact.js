import React from 'react'
import { Grid, Paper, Typography, makeStyles } from '@material-ui/core'
import { data } from '../data/data'

const styles = makeStyles({
    container: {
        display: 'flex', 
        margin: '1rem', 
        color: 'red'
    }, 
    item: {

    }
})


export default function Contact() {
    return (
        <div className={styles.container}>
            <Typography variant={"h3"}>{data.contact.firstName} {data.contact.lastName}</Typography>
        </div>
    )
}
