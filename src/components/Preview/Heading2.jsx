
const Heading2 = (props) => {
    const style={
        textAlign:'justify',
        fontSize:'unset',
        fontSize:'0.72rem',
        margin:'0.6rem 0 0.6rem 0',
        color:'#2d3e50',
        fontFamily:'manrope',
        lineHeight:'0.80rem',
        overflowWrap:'break-word',
    }
    return (
        <h2 className='editor-preview-head2' style={style}>{props.children}</h2>
    )
}

export default Heading2