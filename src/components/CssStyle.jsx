import React,{useState, useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowRight, faBold, faCode, faItalic, faTextHeight} from '@fortawesome/free-solid-svg-icons'
import '../css/cssstyle.css'
import { StyleContext } from '../hooks/StyleContext'

const CssStyle = () => {
    
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
            <FontAwesomeIcon icon={faBold} className={`${Active}`}  onClick={() =>setStyle(prev =>([...prev, {fontSize:'100px'}]))} />
            <FontAwesomeIcon icon={faItalic} className={`${Active}`} onClick={() =>setStyle(prev =>([...prev, {fontWeight:'italic'}]))}/>
            <FontAwesomeIcon icon={faTextHeight} className={`${Active}`} onClick={() =>setStyle(prev =>([...prev, {textDecoration:'none'}]))}  />
            <FontAwesomeIcon icon={faCode} className={`${Active}`}  onClick={() =>setStyle(prev =>([...prev, {fontStyle:'bold'}]))} />
        </div>
    )
}

export default CssStyle
