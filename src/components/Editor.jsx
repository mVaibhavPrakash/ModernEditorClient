import React from 'react'
import Selector from './Selector'
import {Input} from './Input'
import {Submit} from './Submit'
import Style from './Style'
import '../css/editor.css'

const Editor = () => {
    return (
        <>
            <Selector />
            <Style />
            <Input />
            <Submit />
        </>
    )
}

export default Editor;
