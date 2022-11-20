import { useRef,useContext,useEffect,lazy} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faMaximize, faMinimize} from '@fortawesome/free-solid-svg-icons'
import {navToggle} from '../js/navToggle'
import '../css/preview.css'
import previewFull from '../js/previewFull'
import { TogglePreviewSize } from '../hooks/TogglePreviewSize'
import Preview from './Preview/Preview'

const PreviewBar = ({previewRef, NavRef, SidebarRef, EditRef,EditorDivRef}) => {
    const ContentRef = useRef(null)
    const [isFullSize,setFullSize] = useContext(TogglePreviewSize)

    useEffect(() =>{
        if(!isFullSize){
            const editorWidth =parseInt(EditRef.current.style.width.split('vw')[0])
            previewRef.current.style.width = `${100 - editorWidth}vw`
            ContentRef.current.style.width=`90%`
            ContentRef.current.style.margin=`0 auto`
        }
        else{
            ContentRef.current.style.width='60%'
            ContentRef.current.style.margin=`0 auto`
        }
    },[isFullSize])
    return (
        <div ref={previewRef} className='editor-preview'>
            <div className='editor-preview-btnDiv'>
                <button id="editor-preview-btn1" className='editor-preview-button' onClick={()=>{navToggle(previewRef,NavRef,SidebarRef, EditRef,EditorDivRef,isFullSize,setFullSize);setFullSize(false)}}><FontAwesomeIcon icon={faClose} /></button>
                <button id="editor-preview-btn2" className='editor-preview-button' onClick={()=>{previewFull(setFullSize,previewRef,NavRef,SidebarRef, EditRef,EditorDivRef,isFullSize)}}>{!isFullSize ?  <FontAwesomeIcon icon={faMaximize} />:<FontAwesomeIcon icon={faMinimize} />}</button>
            </div>
            <Preview ContentRef={ContentRef}/>
        </div>
    )
}

export default PreviewBar