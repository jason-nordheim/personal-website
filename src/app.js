import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core/'
import { Menu as MenuIcon} from '@material-ui/icons'

const App = () => {

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
            <Typography variant="h6" noWrap>
              Jason Nordheim
            </Typography>
          </IconButton> 
        </Toolbar>
      </AppBar>
      
    </Router>
  )
}

export default App