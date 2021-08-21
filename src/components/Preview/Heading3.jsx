
const Heading3 = (props) => {
    const style={
        textAlign:'justify',
        fontSize:'unset',
        wordBreak:'break-all',
        fontSize:'0.575rem',
        margin:'10px 0px 5px 0px'
    }
   console.log(props)
    return (
        <h3 className='preview-head3' style={style}>{props.children}</h3>
    )
}

export default Heading3