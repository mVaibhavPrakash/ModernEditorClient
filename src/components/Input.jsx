import {useContext} from 'react'
import { InputContext } from '../hooks/InputContext';
import { SelectedTextContext } from '../hooks/SelectedTextContext';
import selectInputText from '../js/selectInputText'
import '../css/input.css'
import { useEffect } from 'react';

export const Input = () => {

    const [Result,setResult] = useContext(InputContext);
    const [selected, setSelected] = useContext(SelectedTextContext)

    const debounce = () =>{
        let time;
        return (Input,setResult) =>{
            clearTimeout(time);
            time = setTimeout(() =>{
                setResult(Input)
            },500)
        }
    }
    const deb = debounce()

    return (
        <textarea id='editor-input' autoFocus placeholder="Type something here!" onChange={(e) => deb(e.target.value,setResult)}
        className="editor-blogInput" onSelect={(e) =>selectInputText(e,setSelected,Result)}/>
    )
}
