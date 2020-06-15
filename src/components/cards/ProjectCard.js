import React from 'react'
import SnakeGameBoard from '../../games/snake/SnakeGameBoard'

const CARD_STYLES = {
    width: '100%', 
    height: '100%'
}

export default function ProjectCard() {
    return (
        <div>
            <SnakeGameBoard /> 
        </div>
    )
}
