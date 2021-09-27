import { faCog} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/navbar.css'
import clickNav from '../js/clickNav';

const Navbar = ({NavRef,SidebarRef, EditRef,EditorDivRef}) => {
    return (
        <nav ref={NavRef} className='nav'>
            <div className='navbarLeft'>
                <a id="navbarCompanyLogo">Company</a>
                <a id="home">Home</a>
            </div>
            <div className='navbarRight'>
                <button id='cog' title='Settings' onClick={()=>clickNav(NavRef,SidebarRef,EditRef,EditorDivRef)}><FontAwesomeIcon icon={faCog}/></button>
            </div>
        </nav>
    )
}

export default Navbar;
