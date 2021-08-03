import React from 'react'
import Selector from './Selector'
import {Input} from './Input'
import {Submit} from './Submit'
import Style from './Style'
import { SelectInputProvider } from '../hooks/SelectInputContext'

const Editor = () => {
    return (
        <>
        <SelectInputProvider>
            <Selector />
            <Style />
            <Input />
            <Submit />
        </SelectInputProvider>
        </>
    )
}

export default Editor;
