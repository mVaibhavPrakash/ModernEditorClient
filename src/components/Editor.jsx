import React from 'react'
import {Input} from './Input'
import {Submit} from './Submit'
import { InputContextProvider } from '../hooks/InputContext'
import { SelectInputProvider } from '../hooks/SelectInputContext'
import Title from './Title'
import Selector from './Selector'
import SelectPreview from './SelectPreview'

const Editor = () => {
    return (
        <>
            <InputContextProvider>
                    <Title/>
                <SelectInputProvider>
                    <Selector />
                </SelectInputProvider>
                    <Input />
                    <Submit />
                    <SelectPreview />
            </InputContextProvider>
        </>
    )
}

export default Editor;
