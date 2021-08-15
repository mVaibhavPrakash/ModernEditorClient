import React from 'react'
import liGenerator from '../../js/li'

const UList = (props) => {
    return (
        <ul style={{listStylePosition: 'inside',textIndent: '5px',listStylePosition: 'inside'}}>
            {liGenerator(props)}
        </ul>
    )
}

export default UList
