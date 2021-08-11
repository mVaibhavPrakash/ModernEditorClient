import React ,{useContext} from 'react'
import '../css/submit.css'
import { InputContext } from '../hooks/InputContext'
import submitData from '../js/submitData.js'

export const Submit = () => {
    const [Input, setInput] = useContext(InputContext)

    return (
        <div className="submitDiv">
            <button id='submitBlog' onClick={e => submitData(e,Input, setInput)}>Submit</button>
        </div>
    )
}
