import './Blog.css'
const Paragraph = (props) => {

    return (
        <p className='editor-paragraph'>{props.children}</p>
    )
}

export default Paragraph
