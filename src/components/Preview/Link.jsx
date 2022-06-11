import './Blog.css'

const Link = (props) =>{
    return (
        <a id='blog-link' href={props.href} target='_blank'>{props.children}</a>
    )
}

export default Link;