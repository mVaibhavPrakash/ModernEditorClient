import { useState,useEffect } from 'react';
import { faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {navToggle} from '../js/navToggle';
import previewFull from '../js/previewFull';
import '../css/navbar.css'
import Image from '../../public/img/newgen.png' 
import { useContext } from 'react';
import { TogglePreviewSize } from '../hooks/TogglePreviewSize';

const Navbar = ({previewRef, NavRef,SidebarRef, EditRef,EditorDivRef,footerRef}) => {
    const [isWindowNotLoaded,setLoadStatus]=useState(true)
    const [isFullSize,setFullSize] = useContext(TogglePreviewSize)

    useEffect(() =>{
        if(isWindowNotLoaded){
            switch (document.readyState) {
                case 'loading' :
                    setLoadStatus(true)
                case 'interactive' :
                    setLoadStatus(true)
                case 'complete' :   
                    setLoadStatus(false);
            }
        }
    },[isWindowNotLoaded])

    return (
        <nav ref={NavRef} className='editor-nav'>
            <div className='editor-navbarLeft'>
            <img id="editor-navbarCompanyLogo" src={Image} alt='img'/>
            </div>
            <div className='editor-navbarRight'>
                <button id='editor-cog' title='Preview' onClick={()=>{window.innerWidth > 760 ? navToggle(previewRef,NavRef,SidebarRef, EditRef,EditorDivRef):previewFull(setFullSize,previewRef,NavRef, SidebarRef,EditRef,EditorDivRef,isFullSize)}} disabled={isWindowNotLoaded}><FontAwesomeIcon icon={faUpRightFromSquare} id='editor-cog-btn'/></button>
            </div>
        </nav>
    )
}

export default Navbar;
