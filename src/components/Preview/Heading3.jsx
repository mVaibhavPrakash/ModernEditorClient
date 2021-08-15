import React from 'react'

const Heading3 = (props) => {

   console.log(props)
    return (
        <>
        <h3 className='preview-head3'>{props.children}</h3>
        </>
    )
}

export default Heading3