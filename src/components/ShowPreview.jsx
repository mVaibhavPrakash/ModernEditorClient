import React from 'react'
import ReactDom from 'react-dom'
import Preview from './Preview/Preview'
import closeModal from '../js/closeModal'
import '../css/showPreview.css'

const ShowPreview = ({stat}) => {
    const style={
        width:'60vw',
        margin:'0 auto',
        height:'auto'
    }
    return ReactDom.createPortal(
        <div id="myModal" className="modal">
            <div className="modal-content" style={style}>
                <span className="close" onClick={(e) =>closeModal(e)}>&times;</span>
                <Preview dat={stat}/>
            </div>
        </div>,document.getElementById('preview-portal')
    )
}

export default ShowPreview
