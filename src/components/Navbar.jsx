
import { useContext,useEffect,useRef } from 'react';
import { faCog} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import navToggle from '../js/navToggle';
import '../css/navbar.css'

const Navbar = ({NavRef,SidebarRef, EditRef,EditorDivRef,isClicked,setClicked}) => {
    const newRef = useRef('false')
    useEffect(() => {
        if(newRef.current=== 'false'){
            newRef.current='true'
        }
        else{
            navToggle(NavRef,SidebarRef,EditRef,EditorDivRef)
        }
    }, [isClicked])
    return (
        <nav ref={NavRef} className='nav'>
            <div className='navbarLeft'>
                <a id="navbarCompanyLogo">Company</a>
                <a id="home">Home</a>
            </div>
            <div className='navbarRight'>
                <button id='cog' title='Settings' onClick={()=>{setClicked(!isClicked)}}><FontAwesomeIcon icon={faCog}/></button>
            </div>
        </nav>
    )
}

export default Navbar;
