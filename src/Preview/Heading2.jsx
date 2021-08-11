import React from 'react'

const Heading2 = (props) => {

   console.log(props)
    return (
        <>
        <h2 className='head2'>{props.children}</h2>
        </>
    )
}

export default Heading2