import React, {useEffect,useContext, useState} from 'react'
import ShowPreview from './ShowPreview'
import showPreview from '../js/showPreview'
import '../css/selectpreview.css'
import '../js/js'

const SelectPreview = () => {
    const [state, seState] = useState(1)
    return(
        <React.Fragment>
            <div className="showpreview-div">
                <button className='showpreview' onClick={(e) =>showPreview(e,state,seState)}>Preview</button>
            </div>
            <ShowPreview stat={state}/>
        </React.Fragment>
    )
}


export default SelectPreview
