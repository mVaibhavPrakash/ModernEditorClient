import { useRef,lazy,useState,Suspense } from 'react'
import Navbar from './Navbar'
import Title from './Title'
import Selector from './Selector'
import {Input} from './Input'
import {Submit} from './Submit'
import ShowPreview from './ShowPreview'
import { InputContextProvider } from '../hooks/InputContext'
import { EditContextProvider } from '../hooks/EditContext'
import { SelectedTextContextProvider } from '../hooks/SelectedTextContext'
import { RenderPreviewContextProvider } from '../hooks/RenderPreviewContext'
import '../css/editor.css'
const SideNav = lazy(() => import('./SideNav'))

const Editor = () => {
    const SidebarRef =useRef(null)
    const EditRef =useRef(null)
    const EditorDivRef =useRef(null)
    const NavRef = useRef(null)
    const ModalRef = useRef(null)
    const [showSidenav,setshowSidenav] = useState(false)
    return (
        <>
         <Navbar NavRef={NavRef} SidebarRef={SidebarRef} EditRef={EditRef} EditorDivRef={EditorDivRef} setState={setshowSidenav} state={showSidenav}/>
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
                <Suspense fallback={<div>Loading.......</div>}>
                   <div ref={SidebarRef} className="sideBarDiv">
                        <SideNav NavRef={NavRef} SidebarRef={SidebarRef} EditRef={EditRef} EditorDivRef={EditorDivRef} setState={setshowSidenav} state={showSidenav}/>
                    </div>
                </Suspense>
            </div>
            </>
    )
}

export default Editor;
