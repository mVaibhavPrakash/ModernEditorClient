import {useContext, useEffect} from 'react'
import { EditContext } from '../hooks/EditContext'
import { InputContext } from '../hooks/InputContext'
import submitData from '../js/submitData.js'
import showPreview from '../js/showPreview'
import '../css/submit.css'
import { RenderPreviewContext } from '../hooks/RenderPreviewContext'

export const Submit = ({ModalRef}) => {

    const [Input, setInput] = useContext(InputContext)
    const [isEdit,setEdit] = useContext(EditContext)
    const [state,setState] = useContext(RenderPreviewContext)
    let data;

    useEffect(() =>{

        data= localStorage.getItem('data')
        
    },[Input,isEdit])

    return (
        <div className="editor-submitDiv">
            <button id='editor-submitBlog' onClick={e =>{ submitData(e,data, Input, setInput,isEdit,setEdit);showPreview(e,ModalRef,state,setState,Input)}}>Submit</button>
        </div>
    )
}
