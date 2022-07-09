import ReactDom from 'react-dom'
import closeModal from '../js/closeModal'
import '../css/sidenavbar.css'
import '../js/windows'
import SideNav from './SideNav'


const SideNavBar = ({ModalRef}) => {
    return ReactDom.createPortal(
        <div ref={ModalRef} id="editor-myModal" className="editor-modal">
            <div className="editor-modal-content">
                <SideNav ModalRef={ModalRef}/>
            </div>
        </div>,document.getElementById('preview-portal')
    )
}

export default SideNavBar
