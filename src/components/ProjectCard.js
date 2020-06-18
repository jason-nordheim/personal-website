import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

export default function ProjectCard() {
    return (
        <Card variant="elevation" elevation={2}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    This is a test 
                </Typography>
            </CardContent>
        </Card>
    )
}
