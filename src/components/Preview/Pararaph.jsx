import React from 'react'

const Pararaph = (props) => {
    const style={
        textAlign:'justify',
        fontSize:'unset',
        width:'60vw'
    }
    return (
        <div className="preview-para" style={style}>{props.children}</div>
    )
}

export default Pararaph
