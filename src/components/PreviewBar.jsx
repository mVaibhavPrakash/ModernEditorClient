import { useRef,useState,useEffect} from 'react'
import {navToggle} from '../js/navToggle'
import '../css/preview.css'
import Preview from './Preview/Preview'
import previewFull from '../js/previewFull'

const PreviewBar = ({previewRef, NavRef, SidebarRef, EditRef,EditorDivRef,footerRef}) => {
    const [isFullSize,setFullSize] = useState(false)
    useEffect(() =>{
        if(!isFullSize){
            const editorWidth =parseInt(EditRef.current.style.width.split('vw')[0])
            previewRef.current.style.width = `${100 - editorWidth}vw`
        }
    },[isFullSize])
    return (
        <div ref={previewRef} className='editor-preview'>
            <div className='editor-preview-btnDiv'>
                <button id="editor-preview-btn1" className='editor-preview-button' onClick={()=>{navToggle(previewRef,NavRef,SidebarRef, EditRef,EditorDivRef,isFullSize,setFullSize);setFullSize(false)}}>X <span>Close</span></button>
                <button id="editor-preview-btn2" className='editor-preview-button' onClick={()=>{previewFull(isFullSize,setFullSize,previewRef,NavRef, EditRef,EditorDivRef,SidebarRef)}}>{!isFullSize ?  <span>+ Full</span>:  <span>X Min</span>}</button>
            </div>
            <Preview />
        </div>
    )
}

export default PreviewBar