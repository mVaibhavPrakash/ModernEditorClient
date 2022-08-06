import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { faEye} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {navToggle} from '../js/navToggle';
import '../css/navbar.css'
import ImageNotStandalone from './ImageNotStandalone';
import ImageStandalone from './ImageStandalone';

const Navbar = ({previewRef, Image,NavRef,SidebarRef, EditRef,EditorDivRef,footerRef}) => {
    const [isWindowNotLoaded,setLoadStatus]=useState(true)

    useEffect(() =>{
        if(isWindowNotLoaded){
            switch (document.readyState) {
                case 'complete' :   
                    setLoadStatus(false);
            }
        }
    },[isWindowNotLoaded])

    return (
        <nav ref={NavRef} className='editor-nav'>
            <div className='editor-navbarLeft'>
            {Image === 'not-standalone' ? ( async () =>{
                    const {default : ImageNotStandalone} = await import('./ImageNotStandalone');
                    <ImageNotStandalone/>
                })(): <ImageStandalone/>}
                <Link to={'/'} id="editor-home">Home</Link>
            </div>
            <div className='editor-navbarRight'>
                <button id='editor-cog' title='Preview' onClick={()=>{navToggle(previewRef,NavRef,SidebarRef, EditRef,EditorDivRef)}} disabled={isWindowNotLoaded}><FontAwesomeIcon icon={faEye} id='editor-cog-btn'/></button>
            </div>
        </nav>
    )
}

export default Navbar;
