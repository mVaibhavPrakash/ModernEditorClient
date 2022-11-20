import './Blog.css'

const Link = (props) =>{
    return (
        <a id='ediotor-link' href={props.href} target='_blank'>{props.children}</a>
    )
}

export default Link;