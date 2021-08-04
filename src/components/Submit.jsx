import React from 'react'
import '../css/submit.css'
import submitData from '../js/submitData.js'

export const Submit = () => {
    return (
        <div className="submitDiv">
            <button id='submitBlog' onClick={(e) =>submitData(e,obj)}>Submit</button>
        </div>
    )
}
