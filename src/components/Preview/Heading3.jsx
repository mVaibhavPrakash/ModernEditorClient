
const Heading3 = (props) => {
    const style={
        textAlign:'justify',
        fontSize:'unset',
        fontSize:'0.6rem',
        margin:'0.6rem 0 0.6rem 0',
        color:'#2d3e50',
        overflowWrap:'break-word'
    }
    return (
        <h3 className='editor-preview-head3' style={style}>{props.children}</h3>
    )
}

export default Heading3