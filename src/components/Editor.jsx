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
    return (
        <>
            <Navbar />
            <div id='edit' className="editor">
                <div className='editorDiv'>
                    <InputContextProvider>
                        <Title/>
                            <RenderPreviewContextProvider>
                                <SelectedTextContextProvider>
                                    <Selector />
                                <EditContextProvider>
                                    <Input />
                                    <Submit />
                                    <ShowPreview />
                                </EditContextProvider>
                                </SelectedTextContextProvider>
                            </RenderPreviewContextProvider>
                    </InputContextProvider>
                </div>
                <div className="sideBarDiv">
                    <SideNav />
                </div>
            </div>
        </>
    )
}

export default Editor;
