import React from 'react'
import { Link } from 'react-router-dom'
import { color } from '../colors'


const LI_STYLE = {
    display: 'flex',    
    listStyle: "none", 
}
const ANCHOR_STYLE = {
    margin: '10px 10px', 
    borderRadius: '5px', 
    color: color.text,
    textDecoration: 'none',
    display: 'flex', 
    width: '10vw', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '2rem', 
    backgroundColor: color.navigationLink
}

export default function NavigationLink(props){

    return (
        <li style={LI_STYLE}>
            <Link 
                style={ANCHOR_STYLE} 
                to={props.relativeURL}
                >{props.text}
            </Link>
        </li>
    )
}
