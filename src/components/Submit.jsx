import React ,{useContext} from 'react'
import '../css/submit.css'
import { InputContext } from '../hooks/InputContext'
import { SelectInputContext } from '../hooks/SelectInputContext'
import { StyleContext } from '../hooks/StyleContext'
import submitData from '../js/submitData.js'

export const Submit = () => {
    const [Input, setInput] = useContext(InputContext)
    const [Element,setElement] = useContext(SelectInputContext)
    const [Style,setStyle] =useContext(StyleContext)

    return (
        <div className="submitDiv">
            <button id='submitBlog' onClick={e => submitData(e,Input,Element,Style, setInput, setElement, setStyle)}>Submit</button>
        </div>
    )
}
