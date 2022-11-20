import {useContext,useCallback,useRef} from 'react'
import { InputContext } from '../hooks/InputContext';
import { SelectedTextContext } from '../hooks/SelectedTextContext';
import selectInputText from '../js/selectInputText'
import '../css/input.css'
import { useEffect } from 'react';

export const Input = ({InputRef}) => {

    const [Result,setResult] = useContext(InputContext);
    const [selected, setSelected] = useContext(SelectedTextContext)

    useEffect(()=>{
        deb.current = debounce();
    },[])

    const deb = useRef(null)

    const debounce = () =>{
        let time;
        console.log('h')
        return (Input,setResult) =>{
            clearTimeout(time);
            time = setTimeout(() =>{
                setResult(Input)
            },500)
        }
    }


    return (
    <textarea ref={InputRef} id='editor-input' autoFocus placeholder="Start typing...." onChange={(e) =>deb.current(e.target.value,setResult)}
        className="editor-blogInput"
        spellCheck='true' onSelect={(e) =>selectInputText(e,setSelected,Result)}/>
    )
}
