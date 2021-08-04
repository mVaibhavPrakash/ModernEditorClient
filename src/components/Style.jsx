import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowRight, faBold, faCode, faItalic} from '@fortawesome/free-solid-svg-icons'
import '../css/style.css'
import { InputContext } from '../hooks/InputContext'

const Style = () => {
    const [active,setActive] =useState('options');
    const [Input, setInput] = useContext(InputContext);

    const fun = () =>{
        let icon;
        if(active==='options'){
            icon=faArrowDown
        }
        else{
            icon=faArrowRight
        }
        return icon;
    }
    
    return (
        <div className='style'>
            <FontAwesomeIcon icon={fun()} id='toogleStyle' onClick={()=>{if(active==='options')setActive('optionsActive'); else setActive('options')}}/>
            <FontAwesomeIcon icon={faBold} className={`${active}`} onClick={setStyle(prev => ({ ...prev, fontStyle: 'bold' }))}/>
            <FontAwesomeIcon icon={faItalic} className={`${active}`} onClick={setStyle(prev => ({ ...prev, fontStyle: 'italic' }))}/>
            <FontAwesomeIcon icon={faItalic} className={`${active}`} onClick={setStyle(prev => ({ ...prev, fontStyle: 'bold' }))}/>
            <FontAwesomeIcon icon={faCode} className={`${active}`} onClick={setStyle(prev => ({ ...prev, fontStyle: 'bold' }))}/>
        </div>
    )
}

export default Style
