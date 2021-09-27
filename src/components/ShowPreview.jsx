import {useContext} from 'react'
import ReactDom from 'react-dom'
import Preview from './Preview/Preview'
import closeModal from '../js/closeModal'
import '../css/showPreview.css'
import '../js/js'
import { RenderPreviewContext } from '../hooks/RenderPreviewContext'

const ShowPreview = ({ModalRef}) => {
    const style={
        width:'60vw',
        margin:'0 auto',
        height:'auto'
    }

    const [state,setState] = useContext(RenderPreviewContext)

    return ReactDom.createPortal(
        <div ref={ModalRef} id="myModal" className="modal">
            <div className="modal-content" style={style}>
                <span className="close" onClick={(e) =>closeModal(e,ModalRef)}>&times;</span>
                <Preview ModalRef={ModalRef} dat={state}/>
            </div>
        </div>,document.getElementById('preview-portal')
    )
}

export default ShowPreview
