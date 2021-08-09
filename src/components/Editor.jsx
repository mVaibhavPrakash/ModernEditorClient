import React from 'react'
import Selector from './Selector'
import {Input} from './Input'
import {Submit} from './Submit'
import CssStyle from './CssStyle'
import { SelectInputProvider } from '../hooks/SelectInputContext'
import { StyleContextProvider } from '../hooks/StyleContext'
import { InputContextProvider } from '../hooks/InputContext'
import Preview from './Preview'

const Editor = () => {
    return (
        <>
        <SelectInputProvider>
            <Selector />
            <InputContextProvider>
                <StyleContextProvider>
                    <Input />
                    <CssStyle/>
                    <Submit />
                </StyleContextProvider>
            </InputContextProvider>
        </SelectInputProvider>
        <Preview/>
        </>
    )
}

export default Editor;
