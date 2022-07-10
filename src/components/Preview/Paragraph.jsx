import './Blog.css'
const Paragraph = (props) => {
    console.log(props.children)

    return (
        <p className="editor-preview-para">{props.children}</p>
    )
}

export default Paragraph
