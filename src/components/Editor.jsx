import {lazy, useEffect, useRef,useState} from 'react'
import Navbar from './Navbar'
import Title from './Title'
import Selector from './Selector'
import {Input} from './Input'
import {Submit} from './Submit'
import { InputContextProvider } from '../hooks/InputContext'
import { EditContextProvider } from '../hooks/EditContext'
import { SelectedTextContextProvider } from '../hooks/SelectedTextContext'
import { RenderPreviewContextProvider } from '../hooks/RenderPreviewContext'
import { TogglePreviewSizeProvider } from '../hooks/TogglePreviewSize'
import '../css/editor.css'
const SideNavBar = lazy(() =>import('./SideNavBar'))
const PreviewBar = lazy(() =>import('./PreviewBar'))

const Editor = () => {
    const SidebarRef =useRef(null)
    const EditRef =useRef(null)
    const EditorDivRef =useRef(null)
    const NavRef = useRef(null)
    const ModalRef = useRef(null)
    const previewRef = useRef(null)
    const InputRef = useRef(null)

    const [isWindowNotLoaded,setLoadStatus]=useState(true)

    useEffect(() =>{
        if(isWindowNotLoaded){
            switch (document.readyState) {
                case 'loading' :
                    setLoadStatus(true)
                case 'interactive' :
                    setLoadStatus(true)
                case 'complete' :
                    ( async () =>{
                        const {default : resizes} = await import('../js/resizes.js')
                        resizes()
                    })()
                    setLoadStatus(false)
            }
        }
    },[isWindowNotLoaded])

    return (
        <>
            <div id='editor-container'>
                <InputContextProvider>
                <RenderPreviewContextProvider>
                <SelectedTextContextProvider>
                <EditContextProvider>
                <TogglePreviewSizeProvider>
                <div className='main'>
                <Navbar previewRef={previewRef} NavRef={NavRef} SidebarRef={SidebarRef} EditRef={EditRef} EditorDivRef={EditorDivRef}/>
                    <div ref={EditRef} id='edit-ref' className="editor-editor">
                        <div ref={EditorDivRef} className='editor-editorDiv'>
                            <Title/>
                            <Selector ModalRef={ModalRef} InputRef={InputRef}/>
                            <Input InputRef={InputRef}/>
                            <Submit ModalRef={ModalRef}/>
                            <SideNavBar ModalRef={ModalRef}/>
                        </div>
                    </div>
                </div>
                <div ref={SidebarRef} className="editor-previewDiv">
                    <PreviewBar previewRef={previewRef} NavRef={NavRef} SidebarRef={SidebarRef} EditRef={EditRef} EditorDivRef={EditorDivRef} />
                </div>
                </TogglePreviewSizeProvider>
                </EditContextProvider>
                </SelectedTextContextProvider>
                </RenderPreviewContextProvider>
                </InputContextProvider>
            </div>
        </>
    )
}

export default Editor;
