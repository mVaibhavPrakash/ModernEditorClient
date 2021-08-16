import React from 'react'

const Pararaph = (props) => {
    const style={
        textAlign:'justify',
        fontSize:'.35rem',
        width:'60vw',
        wordBreak:'break-all',
        fontFamily: "'Source Sans Pro', 'Lucida Grande', sans-serif",
        color: '#333',
        padding:'2px 0px 2px 0px'
    }
    return (
        <div className="preview-para" style={style}>{props.children}</div>
    )
}

export default Pararaph
