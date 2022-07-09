import {useEffect, useRef} from 'react'
import Navbar from './Navbar'
import Title from './Title'
import Selector from './Selector'
import {Input} from './Input'
import {Submit} from './Submit'
import SideNavBar from './SideNavBar'
import PreviewBar from './PreviewBar'
import { InputContextProvider } from '../hooks/InputContext'
import { EditContextProvider } from '../hooks/EditContext'
import { SelectedTextContextProvider } from '../hooks/SelectedTextContext'
import { RenderPreviewContextProvider } from '../hooks/RenderPreviewContext'
import '../css/editor.css'
import ('../js/resizes.js')

const Editor = ({Image}) => {
    const SidebarRef =useRef(null)
    const EditRef =useRef(null)
    const EditorDivRef =useRef(null)
    const NavRef = useRef(null)
    const ModalRef = useRef(null)

    return (
        <>
        <div id='editor-container'>
        <div className='main'>
         <Navbar Image={Image} NavRef={NavRef} SidebarRef={SidebarRef} EditRef={EditRef} EditorDivRef={EditorDivRef}/>
            <div ref={EditRef} id='edit-ref' className="editor-editor">
                <div ref={EditorDivRef} className='editor-editorDiv'>
                    <InputContextProvider>
                        <Title/>
                            <RenderPreviewContextProvider>
                                <SelectedTextContextProvider>
                                    <Selector ModalRef={ModalRef}/>
                                <EditContextProvider>
                                    <Input />
                                    <Submit ModalRef={ModalRef}/>
                                    <SideNavBar ModalRef={ModalRef}/>
                                </EditContextProvider>
                                </SelectedTextContextProvider>
                            </RenderPreviewContextProvider>
                    </InputContextProvider>
                </div>
            </div>
        </div>
        <RenderPreviewContextProvider>
        <div ref={SidebarRef} className="editor-previewDiv">
            <PreviewBar NavRef={NavRef} SidebarRef={SidebarRef} EditRef={EditRef} EditorDivRef={EditorDivRef} />
        </div>
        </RenderPreviewContextProvider>
    </div>
</>
    )
}

export default Editor;
