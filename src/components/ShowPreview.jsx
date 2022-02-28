import {RefObject, useContext} from 'react'
import ReactDom from 'react-dom'
import Preview from './Preview/Preview'
import { RenderPreviewContext } from '../hooks/RenderPreviewContext'
import closeModal from '../js/closeModal'
import '../css/showPreview.css'
import '../js/windows'


const ShowPreview = ({ModalRef,windowRef}) => {
    const style={
        width:'60vw',
        margin:'0 auto',
        height:'auto'
    }

    const [state,setState] = useContext(RenderPreviewContext)

    return ReactDom.createPortal(
        <div ref={ModalRef} id="editor-myModal" className="editor-modal">
            <div className="editor-modal-content" style={style}>
                <span className="editor-close" onClick={(e) =>closeModal(e,ModalRef)}>&times;</span>
                <Preview ModalRef={ModalRef} dat={state}/>
            </div>
        </div>,document.getElementById('preview-portal')
    )
}

export default ShowPreview
