import React, {useContext} from 'react'
import '../css/input.css'
import { InputContext } from '../hooks/InputContext';
import { SelectInputContext } from '../hooks/SelectInputContext';

export const Input = () => {
    const [Element,setElement,Style,setStyle,Input, setInput] = useContext(SelectInputContext);
    return (
        <div className='blogInputDiv'>
            <textarea type="text" className="blogInput" value={Input} onChange={e => setInput(e.target.value)}/>
        </div>
    )
}
