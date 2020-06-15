import React from 'react'
import Navigation from './Navigation'

const HEADER_STYLES = {
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',   
    height: '4rem', 
    width: '100vw', 
    marginBottom: '2rem', 
    fontSize: '1rem'
}

export default function Header() {
    return (
        <header style={HEADER_STYLES}>
            <h1>Jason Nordheim</h1>
            <Navigation />
      </header>
    )
}
