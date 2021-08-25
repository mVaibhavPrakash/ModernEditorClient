
const Heading3 = (props) => {
    const style={
        textAlign:'justify',
        fontSize:'unset',
        wordBreak:'break-all',
        fontSize:'0.62rem',
        margin:'0.6rem 0 0.6rem 0',
    }
   console.log(props)
    return (
        <h3 className='preview-head3' style={style}>{props.children}</h3>
    )
}

export default Heading3