import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import { styles } from '../styles/main'
import { data } from '../data/data'

export default function Education() {
    return (
            <Grid container>
                <Gutter />
                <Grid item md={8}>
                    <Paper style={styles.container}>
                        <Title /> 
                        <College /> 
                        <BlankRow /> 
                        <AdditionalEducation /> 
                        <BlankRow /> 
                        <EducationalBiography /> 
                    </Paper>
                </Grid>
                <Gutter />
            </Grid>
    )
}

function College() {
    return (
        <Grid item sm={12}>
            <Paper variant="outlined">
                <Typography variant="h3">College</Typography>
                { 
                    data.education.college.map(college => {
                        return (
                            <Grid   style={styles.container}
                                    key={college.university.length}  
                                    item 
                                    sm={12}>
                                <Grid item sm={12} md={8}>
                                    <Typography variant={"subtitle1"}>{college.university}</Typography>
                                    <Typography variant={"subtitle2"}>{college.college}</Typography>
                                </Grid>
                                <Grid container>
                                    <Grid item sm={6}>
                                        <Typography style={styles.stat} variant={"body2"}>Major:</Typography>
                                    </Grid>
                                    <Grid item sm={6}  >
                                        <Typography style={styles.stat} variant={"body2"}>
                                            {college.major}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item sm={6}  >
                                        <Typography style={styles.stat} variant={"body2"}>
                                            Minors:
                                        </Typography>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <Typography variant={"body2"} style={styles.stat}>
                                            {college.minors.join(', ')}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item sm={6}>
                                        <Typography style={styles.stat} variant={"body2"}>
                                            GPA:
                                        </Typography>
                                    </Grid>
                                    <Grid item sm={6}>
                                        <Typography style={styles.stat} variant={"body2"}>
                                            {college.gpa}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    })
                }
            </Paper>
        </Grid>
    )
}


function Gutter() {
    return <Grid item md={2}></Grid>
}
function Title(){
    return  (
        <Grid item sm={12}>
            <Typography variant={"h2"} >{data.about.educationalSummary.title}</Typography>
        </Grid>
    )
}
function BlankRow(){
return (  
        <Grid item>
            <Grid container>
                
            </Grid>
        </Grid>
    )
}

function AdditionalEducation(){
    return (
        <Grid item sm={12}>
            <Paper variant="outlined">
                    <Typography variant="h3">Additional Education</Typography>
                {
                    data.education.other.map(e => {
                        return (
                            <Grid   style={styles.container}
                                    item 
                                    sm={12}>
                                <Typography variant={"subtitle1"}>{e.name}</Typography>
                                <Typography variant={"subtitle2"}>{e.program}</Typography>
                            </Grid>
                        )
                    })
                }
            </Paper>
        </Grid>
    )
}

function EducationalBiography(){
    return (
        <Grid item sm={12}>
            <Paper>
                <Typography variant={"h3"}>Educational Biography</Typography>
                {
                    data.about.educationalSummary.summary.split('\n\n').map(p => 
                    <Typography key={p.length} style={styles.text} variant={"body2"} color={"textPrimary"}>{p}</Typography> )
                }
            </Paper>
        </Grid>
    )
}