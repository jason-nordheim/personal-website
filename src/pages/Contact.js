import React, { useState } from 'react'
import { Grid, Paper, Typography, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import { styles } from '../styles/main'
import ContactGutter from '../components/ContactGutter'
import ContactTextField from '../components/ContactTextField'
import ContactExtendedTextField from '../components/ContactExtendedTextField'
import ContactSubmitButton from '../components/ContactSubmitButton'

export default function Contact() {
    const [open, setOpen] = useState(false)

    const openModal = () => setOpen(true)
    const closeModal = () => setOpen(false)

    return (
        <Grid item xs={12}> 
            <Paper>
                <Grid container justify="center">
                    <ContactGutter />
                        <Grid item xs={6}>
                            <Typography variant="h2">Lets get in touch</Typography>
                            <Typography variant="caption">Please fill out the form below</Typography>
                        </Grid>
                    <ContactGutter /> 

                    <Grid item xs={10} styles={styles.contactForm}>
                        <Paper variant="outlined" >
                            <Grid  container spacing={3} justify="center">
                                <Grid item xs={12}></Grid>

                                <ContactGutter /> 
                                    <ContactTextField required="true" label="First name" defaultValue="Joe" /> 
                                    <ContactTextField required="true" label="Last name" defaultValue="Smith" /> 
                                    <ContactTextField required="true" label="Phone" defaultValue="123-456-7891" /> 
                                <ContactGutter /> 

                                <ContactGutter /> 
                                    <ContactExtendedTextField required="true" label="email" defaultValue="yourEmail@you.com" /> 
                                    <ContactSubmitButton handleClick={openModal} /> 
                                    <div>
                                        <Dialog
                                        open={open}
                                        onClose={closeModal}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                        >
                                        <DialogTitle id="alert-dialog-title">{"Thank you for your submission"}</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                            Pleae look for a response via email in 3-5 business days.
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={closeModal} color="primary" autoFocus>
                                            Ok
                                            </Button>
                                        </DialogActions>
                                        </Dialog>
                                    </div>
                                <ContactGutter /> 

                                <Grid item xs={12}></Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
        
    )
}
