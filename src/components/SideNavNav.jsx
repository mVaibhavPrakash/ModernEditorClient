import React from 'react'
import '../css/sideNavNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBold, faCode, faCog, faHeading, faImage, faItalic, faLink, faListOl, faListUl, faMars, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const SideNavNav = ({setActive}) => {
  return (
    <div className='sidenavnav'>
      <div className='sidenavnav-content'>
                    <div className='sidenavnav-btn' aria-label='justify' title='Setting' onClick={(e) => setActive('setting')}> <button><FontAwesomeIcon className='sidenavnav-icon' icon={faHeading}/> </button>  Setting</div >
                    <div className='sidenavnav-btn' aria-label='justify' title='Share' onClick={(e) => setActive('share')}> <button> <FontAwesomeIcon className='sidenavnav-icon' icon={faBold}/> </button>  Share</div >
                    <div className='sidenavnav-btn' aria-label='justify' title='Save' onClick={(e)=> setActive('save') }> <button> <FontAwesomeIcon className='sidenavnav-icon' icon={faItalic}/> </button>  Save</div >
                    <div className='sidenavnav-btn' aria-label='justify' title='Print' onClick={(e) => setActive('print')}> <button> <FontAwesomeIcon className='sidenavnav-icon' icon={faQuoteLeft}/> </button>  Print</div >
                    <div className='sidenavnav-btn' aria-label='justify' title='Cheat' onClick={(e) => setActive('cheat')}> <button> <FontAwesomeIcon className='sidenavnav-icon' icon={faLink}/> </button>  Cheat</div >
                    <div className='sidenavnav-btn' aria-label='justify' title='Code' onClick={(e) => setActive('')}> <button> <FontAwesomeIcon className='sidenavnav-icon' icon={faCode}/> </button> </div >
                    <div className='sidenavnav-btn' aria-label='justify' title='Image' onClick={(e) => setActive('')}> <button> <FontAwesomeIcon className='sidenavnav-icon' icon={faImage}/> </button> </div >
                    <div className='sidenavnav-btn' aria-label='justify' title='Un-ordered List' onClick={(e) => setActive('')}> <button> <FontAwesomeIcon className='sidenavnav-icon' icon={faListUl}/> </button> </div >
                    <div className='sidenavnav-btn' aria-label='justify' title='Ordered List' onClick={(e) => setActive('')}> <button> <FontAwesomeIcon className='sidenavnav-icon' icon={faListOl}/> </button> </div >
      </div>
    </div>
  )
}

export default SideNavNav