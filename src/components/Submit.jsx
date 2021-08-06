import React ,{useContext} from 'react'
import '../css/submit.css'
import { InputContext } from '../hooks/InputContext'
import { SelectInputContext } from '../hooks/SelectInputContext'
import { StyleContext } from '../hooks/StyleContext'
import submitData from '../js/submitData.js'

export const Submit = () => {
    const [Element,setElement,Style,setStyle,Input, setInput] = useContext(SelectInputContext);

    let obj={
        element : Element,
        input : Input
    }

    return (
        <div className="submitDiv">
            <button id='submitBlog' onClick={e => submitData(e,obj, setInput, setElement, setStyle)}>Submit</button>
        </div>
    )
}
