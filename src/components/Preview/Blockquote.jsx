import './Blog.css'
const Blockquote = (props) => {
    console.log(props.children)
    const array =props.children.map((val,ind) =>{
        if(val.props!== undefined && val.props.node.tagName==='p'){
            console.log(val.props)
            return <p className='blockquotes-paragraph'>{val.props.children}</p>
        }
        else{
            return val;
        }
    })
    console.log(array)
    return (
        <blockquote className="editor-quotes">
            {array}
        </blockquote>
    )
}

export default Blockquote
