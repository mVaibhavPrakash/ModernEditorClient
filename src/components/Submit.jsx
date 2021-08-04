import React from 'react'
import '../css/submit.css'
import { InputContext } from '../hooks/InputContext'
import { SelectInputContext } from '../hooks/SelectInputContext'
import { StyleContext } from '../hooks/StyleContext'
import submitData from '../js/submitData.js'

export const Submit = () => {
    const [Style,setStyle] = useContext(StyleContext);
    const [Element,setElement] = useContext(SelectInputContext)
    const [Input,setInput] = useContext(InputContext)

    const obj= {
        element : Element,
        value : Input,
        style : Style
    }

    console.log(obj)
    return (
        <div className="submitDiv">
            <button id='submitBlog' onClick={(e) =>submitData(e,obj)}>Submit</button>
        </div>
    )
}
