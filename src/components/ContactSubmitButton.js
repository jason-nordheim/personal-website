import React from 'react'
import { Button, Grid } from '@material-ui/core'

export default function ContactSubmitButton({ handleClick }) {
    return (
        <Grid item xs={6} sm={3}> 
            <Button variant="contained" color="primary" onClick={handleClick}>
                Submit
            </Button>
        </Grid>
    )
}
