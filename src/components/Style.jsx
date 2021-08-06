import React,{useState, useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowRight, faBold, faCode, faItalic} from '@fortawesome/free-solid-svg-icons'
import '../css/style.css'
import { StyleContext } from '../hooks/StyleContext'

const Style = () => {
    
    const [Style,setStyle] = useContext(StyleContext);
    const [Active,setActive] =useState('options');

    const fun = () =>{
        let icon;
        if(Active==='options'){
            icon=faArrowDown
        }
        else{
            icon=faArrowRight
        }
        return icon;
    }
    
    return (
        <div className='style'>
            <FontAwesomeIcon icon={fun()} id='toogleStyle' onClick={()=>{if(Active==='options')setActive('optionsActive'); else setActive('options')}}/>
            <FontAwesomeIcon icon={faBold} className={`${Active}`}  onClick={() =>setStyle(prev =>  ({...prev,fontStyle: 'bold' }))} />
            <FontAwesomeIcon icon={faItalic} className={`${Active}`} onClick={() =>setStyle(prev =>({...prev,fontStyle: 'italic' }))}/>
            <FontAwesomeIcon icon={faItalic} className={`${Active}`} onClick={() =>setStyle(prev =>({...prev,fontStyle: 'bold' }))}  />
            <FontAwesomeIcon icon={faCode} className={`${Active}`}  onClick={() =>setStyle( prev => ({...prev,fontStyle: 'bold' }))} />
        </div>
    )
}

export default Style
