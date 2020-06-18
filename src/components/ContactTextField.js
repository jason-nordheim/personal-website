import React from 'react'
import { Grid, TextField } from '@material-ui/core'

export default function ContactTextField({ label, defaultValue, required}) {
    return (
        <Grid item xs={6} sm={3}>
            <TextField required={required} variant="outlined" label={label} defaultValue={defaultValue} />
        </Grid>
    )
}
