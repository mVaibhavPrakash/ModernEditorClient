import { useContext } from 'react'
import {navToggle} from '../js/navToggle'
import '../css/preview.css'
import Preview from './Preview/Preview'
import { RenderPreviewContext } from '../hooks/RenderPreviewContext'
import { InputContext } from '../hooks/InputContext'

const PreviewBar = ({NavRef, SidebarRef, EditRef,EditorDivRef,footerRef}) => {
    return (
        
        <div className='editor-preview'>
            <button id="editor-preview-button" onClick={()=>{navToggle(NavRef,SidebarRef, EditRef,EditorDivRef,footerRef)}}>X <span>Close</span></button>
            <Preview />
        </div>
    )
}

export default PreviewBar