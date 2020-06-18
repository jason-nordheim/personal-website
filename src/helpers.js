export const grid = {
    xs: {
        left: 0, 
        center: 12, 
        right: 0
    }, 
    sm: {
        left: 1, 
        center: 10, 
        right: 1 
    }
}

export const item = {
    title: {
        xs: 12, 
        sm: 3
    }, 
    value: {
        xs:12, 
        sm: 9
    }
}

export const months = [
    "January", "February", "March", "Aprl","May", "June", "July","August", "September","October", "November", "December"
]

export const makeDateString = (dateHash) => {
    return `${months[dateHash.month + 1]} ${dateHash.day} , ${dateHash.year}`
}