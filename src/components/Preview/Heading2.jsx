
const Heading2 = (props) => {
    const style={
        textAlign:'justify',
        fontSize:'unset',
        wordBreak:'break-all',
        fontSize:'0.71rem',
        margin:'0.6rem 0 0.6rem 0'
    }
   console.log(props)
    return (
        <h2 className='preview-head2' style={style}>{props.children}</h2>
    )
}

export default Heading2