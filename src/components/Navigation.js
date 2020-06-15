import React from 'react'
import NavigationLink from './NavigationLink'

const UL_STYLES = {
    display: 'flex', 
    flex: 'inline', 
}

const NAV_STYLES = {
    display: 'flex', 
    justifyContent: "center"
}

export default function Navigation() {


    return (
        <nav style={NAV_STYLES} >
            <ul style={UL_STYLES} >
                <NavigationLink {...{ relativeURL: '/', text: "Home"}}/>
                <NavigationLink {...{ relativeURL: '/about', text: "About"}}/>
                <NavigationLink {...{ relativeURL: '/experience', text: "Experience"}}/>
                <NavigationLink {...{ relativeURL: '/projects', text: "Projects"}}/>
            </ul>
        </nav>
    )
}
