import {Fragment} from 'react'
import {Input} from './Input'
import {Submit} from './Submit'
import Title from './Title'
import Selector from './Selector'
import ShowPreview from './ShowPreview'
import { InputContextProvider } from '../hooks/InputContext'
import { EditContextProvider } from '../hooks/EditContext'
import { RenderPreviewContextProvider } from '../hooks/RenderPreviewContext'
import { SelectedTextContextProvider } from '../hooks/SelectedTextContext'

const Editor = () => {
    return (
        <Fragment>
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
        </Fragment>
    )
}

export default Editor;
