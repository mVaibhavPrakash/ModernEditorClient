import {useContext} from 'react'
import { EditContext } from '../../hooks/EditContext.jsx'
import { InputContext } from '../../hooks/InputContext.jsx'
import EditBlog from '../../js/EditBlog'

const Edit = (props) => {
    const style={
        width:'25vw',
        height:'0.6rem',
        color:'#2d3e50',
        fontSize:'0.3rem'
    }
    const [Input,setInput] = useContext(InputContext)
    const [isEdit,setEdit] = useContext(EditContext)
    return (
        <button id='edit-preview-button' style={style} onClick={(e) => { e.preventDefault();EditBlog(props.data,setInput,setEdit)}}>Edit Blog</button>
    )
}

export default Edit
