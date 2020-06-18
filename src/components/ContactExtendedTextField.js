import React from 'react'
import { Grid, TextField } from '@material-ui/core'

export default function ContactExtendedTextField({ label, defaultValue, required}) {
    return (
        <Grid item xs={12} sm={6}>
            <TextField fullWidth required={required} variant="outlined" label={label} defaultValue={defaultValue} />
        </Grid>
    )
}
