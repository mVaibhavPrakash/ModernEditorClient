import React from 'react'

const Heading1 = (props) => {

   console.log(props)
    return (
        <>
        <h1 className='head1'>{props.children}</h1>
        </>
    )
}

export default Heading1
