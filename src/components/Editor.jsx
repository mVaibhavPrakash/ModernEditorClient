import React from 'react'
import {Input} from './Input'
import {Submit} from './Submit'
import { InputContextProvider } from '../hooks/InputContext'
import Preview from './Preview/Preview'
import Title from './Title'

const Editor = () => {
    return (
        <>
            <InputContextProvider>
                    <Title/>
                    <Input />
                    <Submit />
            </InputContextProvider>
                    <Preview/>
        </>
    )
}

export default Editor;
