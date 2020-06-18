import React from 'react'
import { Grid, Paper, List, ListItem, ListItemText, Typography } from '@material-ui/core'

import { grid } from '../helpers'

export default function Book({ book }) {
    console.log(book)
    return (
        <Grid item xs={12}>
            <Paper variant="outlined">
                <Grid container>
                    <Grid item xs={3}>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    <Typography variant="body2">
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
                                    <Typography variant="body2">
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
                                    <Typography variant="body2">
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
                                    <Typography variant="body2">
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
                                    <Typography variant="body2">
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
                                                <Typography variant="body2">
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
                                    <Typography variant="body2">
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
                                    <Typography variant="body2">
                                        {book.status} 
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
