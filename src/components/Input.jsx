import {useContext} from 'react'
import '../css/input.css'
import { InputContext } from '../hooks/InputContext';
import { SelectedTextContext } from '../hooks/SelectedTextContext';
import selectText from '../js/selectText'

export const Input = () => {

    const [Input, setInput] = useContext(InputContext);
    const [selected, setSelected] = useContext(SelectedTextContext)

    return (
        <textarea id='input' placeholder='Start typing...' type="text" className="blogInput" value={Input} onChange={e => setInput(e.target.value)} onSelect={(e) =>selectText(e,selected,setSelected,Input,setInput)}/>
    )
}
