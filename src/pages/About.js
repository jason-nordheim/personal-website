import React, { useState } from 'react'
import { Grid, Typography, Paper, Tabs, Tab } from '@material-ui/core'
import { data } from '../data/data'
import { styles } from '../styles/main'

import Education from '../components/Education'
import Experience from '../components/Experience'
import Interests from '../components/Interests'
import Goals from '../components/Goals'

const SECTIONS = ["Education", "Experience", "Goals", "Interests"]

export default function About() {
    const [currentSection, setCurrentSection] = useState(0)

    const switchSection = event => {
        SECTIONS.forEach((section, index) => {
            if (section.toUpperCase() === event.target.innerText.toUpperCase()){
              setCurrentSection(index)
            }
          })
    }

    return (
        <Grid item sm={12}>
            <Grid container>
                <Grid item sm={12}>
                    <Paper square elevation={1}>
                        <Tabs indicatorColor="secondary" 
                            textColor="secondary"  
                            centered
                            value={currentSection}>
                            { SECTIONS.map(section => {
                                return (
                                <Grid key={section} item sm={3}>
                                    <Tab label={section} onClick={switchSection} />
                                </Grid> 
                                )
                            }) }
                        </Tabs>
                    </Paper>
                </Grid>
                <Grid item sm={12}>
                    <Paper variant={""}>
                        { 
                        currentSection === 0 
                            ? <Education /> 
                            : currentSection === 1 
                            ? <Experience /> 
                            : currentSection === 2 
                                ? <Goals /> 
                                : currentSection === 3 
                                ? <Interests /> 
                                : <Education /> 
                        }
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
           
    )
}
