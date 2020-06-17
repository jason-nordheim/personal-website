import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Tabs, Tab, Paper, Grid, makeStyles } from '@material-ui/core'

import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


const PAGES = ["Home", "About", "Experience", "Projects", "Contact"]


const styles = makeStyles({
  main: {
    padding: '20px'
  }
})


const App = () => {
  const [currentPage, setCurrentPage] = useState(0)

  const switchPage = event => {
    const text = event.target.innerText 
    PAGES.forEach((page, index) => {
      if (page.toUpperCase() === text.toUpperCase()){
        setCurrentPage(index)
      }
    })
  }

  return (
    <Router>
    <header>
      <Paper square>
        <Grid 
            container 
            centered
          >
          <Grid item >
              <Tabs indicatorColor="primary" 
                    textColor="primary" 
                    centered
                    value={currentPage}
              >
              { PAGES.map(p => <Tab key={p} label={p} onClick={switchPage} /> ) }
            </Tabs>
          </Grid>
        </Grid>
      </Paper>
    </header>
    <main>
      <Grid className={styles.main} container>
        { 
          currentPage === 0 
            ? <Home /> 
            : currentPage === 1 
              ? <About /> 
              : currentPage === 2 
                ? <Experience /> 
                : currentPage === 3 
                  ? <Projects /> 
                  : currentPage === 4 
                    ? <Contact /> 
                    : <Home /> 
        }
      </Grid>
    </main>
    <footer>

    </footer>
    </Router>
  )
}

export default App