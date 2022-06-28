import './Blog.css'
const Blockquote = (props) => {
console.log(props.children)
    return (
        <div className="notepaper">
            <figure className="quote">
                <blockquote className="curly-quotes" style={{display:'inline'}}>
                {props.children}
                </blockquote>
        </figure>
</div>
    )
}

export default Blockquote
