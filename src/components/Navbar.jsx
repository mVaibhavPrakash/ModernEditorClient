
import { Link } from 'react-router-dom';
import { faCog} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {navToggle} from '../js/navToggle';
import '../css/navbar.css'
import imge from '../../../../../public/img/newgen.png'

const Navbar = ({Image,NavRef,SidebarRef, EditRef,EditorDivRef,footerRef}) => {
    const img = Image === null ? imge : Image
    return (
        <nav ref={NavRef} className='editor-nav'>
            <div className='editor-navbarLeft'>
            <img id="editor-navbarCompanyLogo" src={img} alt='img'/>
                <Link to={'/'} id="editor-home">Home</Link>
            </div>
            <div className='editor-navbarRight'>
                <button id='editor-cog' title='Settings' onClick={()=>{navToggle(NavRef,SidebarRef, EditRef,EditorDivRef,footerRef)}}><FontAwesomeIcon icon={faCog} id='editor-cog-btn'/></button>
            </div>
        </nav>
    )
}

export default Navbar;
