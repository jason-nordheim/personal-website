import { styles } from './styles/main'

export const grid = {
    xs: {
        left: 1, 
        center: 12, 
        right: 1
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

export const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

export const getTodoStatus = (status) => {
    const style = status === "todo" 
    ? styles.todo 
    : status === "in-progress"
        ? styles.inProgress
        : status === "complete"
            ? styles.complete
            : null
    return style 
}