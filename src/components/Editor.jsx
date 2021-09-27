import { useRef } from 'react'
import {Input} from './Input'
import {Submit} from './Submit'
import Title from './Title'
import Selector from './Selector'
import ShowPreview from './ShowPreview'
import Navbar from './Navbar'
import SideNav from './SideNav'
import '../css/editor.css'
import { InputContextProvider } from '../hooks/InputContext'
import { EditContextProvider } from '../hooks/EditContext'
import { RenderPreviewContextProvider } from '../hooks/RenderPreviewContext'
import { SelectedTextContextProvider } from '../hooks/SelectedTextContext'

const Editor = () => {
    const SidebarRef =useRef(null)
    const EditRef =useRef(null)
    const EditorDivRef =useRef(null)
    const NavRef = useRef(null)
    const ModalRef = useRef(null)
    return (
        <>
         <Navbar NavRef={NavRef} SidebarRef={SidebarRef} EditRef={EditRef} EditorDivRef={EditorDivRef}/>
            <div ref={EditRef} id='edit' className="editor">
                <div ref={EditorDivRef} className='editorDiv'>
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
                <div ref={SidebarRef} className="sideBarDiv">
                    <SideNav NavRef={NavRef} SidebarRef={SidebarRef} EditRef={EditRef} EditorDivRef={EditorDivRef}/>
                </div>
            </div>
            </>
    )
}

export default Editor;
