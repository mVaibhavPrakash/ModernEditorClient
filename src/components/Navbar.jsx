import { faCog} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import navToggle from '../js/navToggle';
import '../css/navbar.css'

const Navbar = ({NavRef,SidebarRef, EditRef,EditorDivRef}) => {
    return (
        <nav ref={NavRef} className='editor-nav'>
            <div className='editor-navbarLeft'>
                <a id="editor-navbarCompanyLogo">Company</a>
                <a id="editor-home">Home</a>
            </div>
            <div className='editor-navbarRight'>
                <button id='editor-cog' title='Settings' onClick={()=>{navToggle(NavRef,SidebarRef, EditRef,EditorDivRef)}}><FontAwesomeIcon icon={faCog}/></button>
            </div>
        </nav>
    )
}

export default Navbar;
