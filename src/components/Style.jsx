import React,{useState, useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowRight, faBold, faCode, faItalic} from '@fortawesome/free-solid-svg-icons'
import '../css/style.css'
import { SelectInputContext } from '../hooks/SelectInputContext'

const Style = () => {
    const [Element,setElement,Style,setStyle,Input, setInput] = useContext(SelectInputContext);
const active='options'
    
    return (
        <div className='style'>
            <FontAwesomeIcon icon={faArrowDown} id='toogleStyle'/>
            <FontAwesomeIcon icon={faBold} className={`${active}`} onClick={setStyle(prev => ({ ...prev, fontStyle: 'bold' }))}/>
            <FontAwesomeIcon icon={faItalic} className={`${active}`} onClick={setStyle(prev => ({ ...prev, fontStyle: 'italic' }))}/>
            <FontAwesomeIcon icon={faItalic} className={`${active}`} onClick={setStyle(prev => ({ ...prev, fontStyle: 'bold' }))}/>
            <FontAwesomeIcon icon={faCode} className={`${active}`} onClick={setStyle(prev => ({ ...prev, fontStyle: 'bold' }))}/>
        </div>
    )
}

export default Style
