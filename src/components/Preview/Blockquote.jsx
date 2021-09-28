const Blockquote = (props) => {
    console.log(props)
    return (
        <blockquote>
            {props.children}
        </blockquote>
    )
}

export default Blockquote
