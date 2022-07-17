import './Blog.css'
const Paragraph = (props) => {

    return (
        <p className="editor-preview-para">{props.children}</p>
    )
}

export default Paragraph
