
const Heading1 = (props) => {
    const style={
        textAlign:'justify',
        fontSize:'unset',
        fontSize:'0.8rem',
        margin:'0.6rem 0 0.6rem 0',
        color:'#2d3e50',
        fontFamily:'serif',
        fontSize:'0.96rem',
        lineHeight:'1.32rem',
        overflowWrap:'break-word'
    }
    return (
        <h1 className='editor-peview-head1' style={style}>{props.children}</h1>
    )
}

export default Heading1
