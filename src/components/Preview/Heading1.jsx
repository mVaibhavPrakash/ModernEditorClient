import React from 'react'

const Heading1 = (props) => {
    const style={
        textAlign:'justify',
        fontSize:'unset'
    }
    return (
        <>
        <h1 className='peview-head1' style={style}>{props.children}</h1>
        </>
    )
}

export default Heading1
