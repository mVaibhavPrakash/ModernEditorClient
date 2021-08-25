import {useContext} from 'react'
import '../css/submit.css'
import { EditContext } from '../hooks/EditContext'
import { InputContext } from '../hooks/InputContext'
import submitData from '../js/submitData.js'

export const Submit = () => {
    const [Input, setInput] = useContext(InputContext)
    const [isEdit,setEdit] = useContext(EditContext)

    return (
        <div className="submitDiv">
            <button id='submitBlog' onClick={e => submitData(e,Input, setInput,isEdit,setEdit)}>Submit</button>
        </div>
    )
}
