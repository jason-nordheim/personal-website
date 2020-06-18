import React, { useState } from 'react'
import { Tabs, Tab, Paper, Grid } from '@material-ui/core'

import { styles } from './styles/main'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


const PAGES = ["Home", "About", "Projects", "Contact"]




const App = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const switchPage = event => {
    const text = event.target.innerText 
    PAGES.forEach((page, index) => {
      if (page.toUpperCase() === text.toUpperCase()){
        setCurrentPage(index)
      }
    })
  }

  return (
    <div className="App">
      <header styles={styles.header}>
        <Paper style={styles.nav} square elevation={2} >
          <Grid container >
            <Grid item sm={12}>
                <Tabs indicatorColor="primary" 
                      textColor="primary" 
                      centered
                      value={currentPage}
                >
                { PAGES.map(p => {
                  return (
                    <Grid key={p} item sm={Math.floor(12/PAGES.length)}>
                      <Tab label={p} onClick={switchPage} />
                    </Grid> 
                  )
                }) }
              </Tabs>
            </Grid>
          </Grid>
        </Paper>
      </header>
      <main styles={styles.main}>
        <Grid container>
          { 
            currentPage === 0 
              ? <Home /> 
              : currentPage === 1 
                ? <About /> 
                : currentPage === 2 
                  ? <Projects /> 
                  : currentPage === 3 
                    ? <Contact /> 
                    : <Home />  
          }
        </Grid>
    </main>
    <footer>
    </footer>
    </div>
  )
}

export default App