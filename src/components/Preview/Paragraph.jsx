
const Paragraph = (props) => {
    const style={
        textAlign:'justify',
        fontSize:'.55rem',
        width:'100%',
        wordBreak:'break-all',
        fontFamily: "'Source Sans Pro', 'Lucida Grande', sans-serif",
        color: '#111111',
        margin:'0.5rem 0 0.5rem 0'
    }
    return (
        <p className="preview-para" style={style}>{props.children}</p>
    )
}

export default Paragraph
