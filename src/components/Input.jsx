import {useContext} from 'react'
import { InputContext } from '../hooks/InputContext';
import { SelectedTextContext } from '../hooks/SelectedTextContext';
import selectInputText from '../js/selectInputText'
import '../css/input.css'

export const Input = () => {

    const [Input,setInput] = useContext(InputContext);
    const [selected, setSelected] = useContext(SelectedTextContext)

    return (
        <textarea id='editor-input' placeholder="Type something here!" className="editor-blogInput" value={Input} onChange={e => setInput(e.target.value)} onSelect={(e) =>selectInputText(e,selected,setSelected,Input,setInput)}/>
    )
}
