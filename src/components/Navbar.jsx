import { faCog, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../css/navbar.css'

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='navbarLeft'>
                <a id="navbarCompanyLogo">Company</a>
                <a id="home">Home</a>
            </div>
            <div className='navbarRight'>
                <button id='cog' title='Settings'><FontAwesomeIcon icon={faCog}/></button>
            </div>
        </nav>
    )
}

export default Navbar;
