import React from 'react'
import Selector from './Selector'
import {Input} from './Input'
import {Submit} from './Submit'
import Style from './Style'
import { SelectInputProvider } from '../hooks/SelectInputContext'
import { StyleContextProvider } from '../hooks/StyleContext'
import { InputContextProvider } from '../hooks/InputContext'

const Editor = () => {
    return (
        <>
        <SelectInputProvider>
            <Selector />
            <Input />
            <Submit />
        </SelectInputProvider>
        </>
    )
}

export default Editor;
