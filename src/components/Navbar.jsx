import { faCog} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import navToggle from '../js/navToggle';
import '../css/navbar.css'

const Navbar = ({NavRef,SidebarRef, EditRef,EditorDivRef,setState,state}) => {
    return (
        <nav ref={NavRef} className='nav'>
            <div className='navbarLeft'>
                <a id="navbarCompanyLogo">Company</a>
                <a id="home">Home</a>
            </div>
            <div className='navbarRight'>
                <button id='cog' title='Settings' onClick={()=>{navToggle(NavRef,SidebarRef,EditRef,EditorDivRef);setState(!state)}}><FontAwesomeIcon icon={faCog}/></button>
            </div>
        </nav>
    )
}

export default Navbar;
