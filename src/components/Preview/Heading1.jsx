
const Heading1 = (props) => {
    const style={
        textAlign:'justify',
        fontSize:'unset',
        wordBreak:'break-all',
        fontSize:'0.8rem',
        margin:'0.6rem 0 0.6rem 0',
        color:'#2d3e50'
    }
    return (
        <h1 className='peview-head1' style={style}>{props.children}</h1>
    )
}

export default Heading1
