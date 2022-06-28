import { useEffect, useRef} from 'react'
import Navbar from './Navbar'
import Title from './Title'
import Selector from './Selector'
import {Input} from './Input'
import {Submit} from './Submit'
import ShowPreview from './ShowPreview'
import SideNav from './SideNav'
import { InputContextProvider } from '../hooks/InputContext'
import { EditContextProvider } from '../hooks/EditContext'
import { SelectedTextContextProvider } from '../hooks/SelectedTextContext'
import { RenderPreviewContextProvider } from '../hooks/RenderPreviewContext'
import '../css/editor.css'
import ('../js/resizes.js')

const Editor = ({footerRef,Image}) => {
    const SidebarRef =useRef(null)
    const EditRef =useRef(null)
    const EditorDivRef =useRef(null)
    const NavRef = useRef(null)
    const ModalRef = useRef(null)

   useEffect( () =>{
		footerRef.current.style.width='100vw'
        footerRef.current.style.backgroundColor='#2d386e';
		return ()=>{
			footerRef.current.style.width='100vw'
            footerRef.current.style.backgroundColor='rgb(50, 190, 143)';
		}
    })
    return (
        <>
         <Navbar Image={Image} NavRef={NavRef} SidebarRef={SidebarRef} EditRef={EditRef} EditorDivRef={EditorDivRef} footerRef={footerRef}/>
            <div ref={EditRef} className="editor-editor">
                <div ref={EditorDivRef} className='editor-editorDiv resize'>
                    <InputContextProvider>
                        <Title/>
                            <RenderPreviewContextProvider>
                                <SelectedTextContextProvider>
                                    <Selector ModalRef={ModalRef}/>
                                <EditContextProvider>
                                    <Input />
                                    <Submit />
                                    <ShowPreview ModalRef={ModalRef}/>
                                </EditContextProvider>
                                </SelectedTextContextProvider>
                            </RenderPreviewContextProvider>
                    </InputContextProvider>
                </div>
                <div ref={SidebarRef} className="editor-sideBarDiv">
                    <SideNav NavRef={NavRef} SidebarRef={SidebarRef} EditRef={EditRef} EditorDivRef={EditorDivRef} footerRef={footerRef}/>
                </div>
            </div>
            </>
    )
}

export default Editor;
