import React from 'react'

const STYLES = {
    display: 'grid', 
    backgroundColor: '#CCC', 
    gridTemplateRows: 'repeat(21,1fr)', 
    gridTemplateColumns: 'repeat(21,1fr)', 
    minHeight: '200px', 
    minWidth: '200px'
}
const CONTAINER = {
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    margin: 0, 
    backgroundColor: 'black' 
}

export default function SnakeGameBoard() {
    const [speed, setSpeed] = useState(1000) // 1 second 

    return (
        <div style={CONTAINER}>
            <div style={STYLES}>
            
            </div>
        </div>
    )
}
