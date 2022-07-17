
import { Link } from 'react-router-dom';
import { faEye} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {navToggle} from '../js/navToggle';
import '../css/navbar.css'
import imge from '../../public/img/newgen.png'
import { useState } from 'react';

const Navbar = ({previewRef, Image,NavRef,SidebarRef, EditRef,EditorDivRef,footerRef}) => {
    const img = Image === null ? imge : Image
    const [isWindowNotLoaded,setLoadStatus]=useState(true)
    window.onload = function(){
        setLoadStatus(false);
    }
    return (
        <nav ref={NavRef} className='editor-nav'>
            <div className='editor-navbarLeft'>
            <img id="editor-navbarCompanyLogo" src={img} alt='img'/>
                <Link to={'/'} id="editor-home">Home</Link>
            </div>
            <div className='editor-navbarRight'>
                <button id='editor-cog' title='Preview' onClick={()=>{navToggle(previewRef,NavRef,SidebarRef, EditRef,EditorDivRef)}} disabled={isWindowNotLoaded}><FontAwesomeIcon icon={faEye} id='editor-cog-btn'/></button>
            </div>
        </nav>
    )
}

export default Navbar;
