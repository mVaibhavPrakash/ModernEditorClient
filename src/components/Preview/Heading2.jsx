import React from 'react'

const Heading2 = (props) => {
    const style={
        textAlign:'justify',
        fontSize:'unset',
        wordBreak:'break-all',
        fontSize:'0.575rem',
        margin:'10px 0px 5px 0px'
    }
   console.log(props)
    return (
        <h2 className='preview-head2' style={style}>{props.children}</h2>
    )
}

export default Heading2