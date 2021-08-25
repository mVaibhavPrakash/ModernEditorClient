
const Image = (props) => {
    const style={
        margin:'0.8rem 0 0.8rem 0',
        width:'100%',
        height:'600px'
    }
    return (
        <img src={props.src} style={style} className='previewImage'/>
    )
}

export default Image
