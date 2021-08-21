import {Fragment} from 'react'
import {Input} from './Input'
import {Submit} from './Submit'
import { InputContextProvider } from '../hooks/InputContext'
import { SelectInputProvider } from '../hooks/SelectInputContext'
import { EditContextProvider } from '../hooks/EditContext'
import Title from './Title'
import Selector from './Selector'
import ShowPreview from './ShowPreview'
import { RenderPreviewContextProvider } from '../hooks/RenderPreviewContext'

const Editor = () => {
    return (
        <Fragment>
            <InputContextProvider>
                    <Title/>
                <RenderPreviewContextProvider>
                    <SelectInputProvider>
                        <Selector />
                    </SelectInputProvider>
                    <EditContextProvider>
                        <Input />
                        <Submit />
                        <ShowPreview />
                    </EditContextProvider>
                </RenderPreviewContextProvider>
            </InputContextProvider>
        </Fragment>
    )
}

export default Editor;
