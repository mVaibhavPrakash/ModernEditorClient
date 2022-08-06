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

const Editor = ({footerRef,Image}) => {
    const SidebarRef =useRef(null)
    const EditRef =useRef(null)
    const EditorDivRef =useRef(null)
    const NavRef = useRef(null)
    const ModalRef = useRef(null)
    const previewRef = useRef(null)
    
    useEffect(() =>{
        switch (document.readyState) {
            case 'complete' :
                ( async () =>{
                    const {default : resizes} = await import('../js/resizes.js')
                    resizes()
                })()
        }
        if(footerRef?.current){
        footerRef.current.style.display='none'
        }
        return() =>{
            if(footerRef?.current){
                footerRef.current.style.display='block'
            }
        }
      },[])

    return (
        <>
            <div id='editor-container'>
                <InputContextProvider>
                <RenderPreviewContextProvider>
                <SelectedTextContextProvider>
                <EditContextProvider>
                <div className='main'>
                <Navbar previewRef={previewRef} Image={Image} NavRef={NavRef} SidebarRef={SidebarRef} EditRef={EditRef} EditorDivRef={EditorDivRef}/>
                    <div ref={EditRef} id='edit-ref' className="editor-editor">
                        <div ref={EditorDivRef} className='editor-editorDiv'>
                            <Title/>
                            <Selector ModalRef={ModalRef}/>
                            <Input />
                            <Submit ModalRef={ModalRef}/>
                            <SideNavBar ModalRef={ModalRef}/>
                        </div>
                    </div>
                </div>
                <div ref={SidebarRef} className="editor-previewDiv">
                    <PreviewBar previewRef={previewRef} NavRef={NavRef} SidebarRef={SidebarRef} EditRef={EditRef} EditorDivRef={EditorDivRef} />
                </div>
                </EditContextProvider>
                </SelectedTextContextProvider>
                </RenderPreviewContextProvider>
                </InputContextProvider>
            </div>
        </>
    )
}

export default Editor;
