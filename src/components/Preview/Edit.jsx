import React, {useContext} from 'react'
import { InputContext } from '../../hooks/InputContext.jsx'
import EditBlog from '../../js/EditBlog'

const Edit = (props) => {
    const style={
        display:'inline-block',
        width:'25vw',
        float:'left',
        height:'0.6rem',
        color:'#2d3e50',
        fontSize:'0.3rem'
    }
    const [Input,setInput] = useContext(InputContext)
    return (
        <button id='edit-preview-button' style={style} onClick={(e) => { e.preventDefault();EditBlog(props.data,setInput,Input)}}>Edit Blog</button>
    )
}

export default Edit
