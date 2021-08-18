import React from 'react'
import ShowPreview from './ShowPreview'
import showPreview from '../js/showPreview'
import '../css/selectpreview.css'
import '../js/js'

const SelectPreview = () => {
    return (
        <>
            <div className="showpreview-div">
                <button id='showpreview' onClick={showPreview}>Preview</button>
            </div>
            <ShowPreview />
        </>
    )
}

export default SelectPreview
