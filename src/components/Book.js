import React from 'react'
import { Grid, Paper, List, ListItem, ListItemText, Typography } from '@material-ui/core'

import { getTodoStatus, capitalize } from '../helpers'

export default function Book({ book }) {
    return (
        <Grid item xs={12}>
            <Paper variant="outlined">
                <Grid container>
                    <Grid item xs={3}>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <Typography color="primary" variant="body2">
                                        Title 
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={9}>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <Typography variant="body2">
                                        {book.title} 
                                    </Typography>
                                    {book.subtitle 
                                    ? <Typography variant="body2"> {book.subtitle}</Typography> 
                                    : null }
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={3}>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <Typography color="primary" variant="overline">
                                        Author 
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={9}>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <Typography variant="body2">
                                        {book.author} 
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={3}>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <Typography color="primary" variant="overline">
                                        Category 
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={9}>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <Typography variant="body2">
                                        {book.category} 
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={3}>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <Typography color="primary" variant="overline">
                                        Sub-Category 
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={9}>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <Typography variant="body2">
                                        {book.subCategory} 
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={3}>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <Typography color="primary" variant="overline">
                                        Summary 
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={9}>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    {
                                        book.summary.split('\n\n').map(p => {
                                            return (
                                                <Typography variant="body2" >
                                                    {p}
                                                </Typography>
                                            )
                                        })
                                    }
                                    
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={3}>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <Typography color="primary" variant="overline">
                                        Status 
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={9}>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <Typography style={getTodoStatus(book.status)} variant="body2">
                                        {capitalize(book.status)} 
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}
