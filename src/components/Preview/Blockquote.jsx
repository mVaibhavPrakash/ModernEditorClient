import './Blog.css'
const Blockquote = (props) => {

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
