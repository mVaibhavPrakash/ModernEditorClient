import React from 'react'
import '../css/sideNavNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog,faShare,faSave, faPrint, faSuitcase, faFileExport, faFileImport, faFile, faSurprise, faA } from '@fortawesome/free-solid-svg-icons'

const SideNavNav = ({setActive}) => {
  return (
    <div className='sidenavnav'>
      <div className='sidenavnav-content'>
                    <div className='sidenavnav-btn' aria-label='justify' title='Cheat' onClick={(e) => setActive('about')}> <button> <FontAwesomeIcon className='sidenavnav-icon' icon={faA}/> </button>  About</div >
                    <div className='sidenavnav-btn' aria-label='justify' title='Setting' onClick={(e) => setActive('setting')}> <button><FontAwesomeIcon className='sidenavnav-icon' icon={faCog}/> </button>  Setting</div >
                    <div className='sidenavnav-btn' aria-label='justify' title='Share' onClick={(e) => setActive('share')}> <button> <FontAwesomeIcon className='sidenavnav-icon' icon={faShare}/> </button>  Share</div >
                    <div className='sidenavnav-btn' aria-label='justify' title='Code' onClick={(e) => setActive('export')}> <button> <FontAwesomeIcon className='sidenavnav-icon' icon={faFileExport}/> </button> Export</div >
                    <div className='sidenavnav-btn' aria-label='justify' title='Image' onClick={(e) => setActive('import')}> <button> <FontAwesomeIcon className='sidenavnav-icon' icon={faFileImport}/> </button> Import</div >
                    <div className='sidenavnav-btn' aria-label='justify' title='Print' onClick={(e) => setActive('print')}> <button> <FontAwesomeIcon className='sidenavnav-icon' icon={faPrint}/> </button>  Print</div >
                    <div className='sidenavnav-btn' aria-label='justify' title='Un-ordered List' onClick={(e) => setActive('docs')}> <button> <FontAwesomeIcon className='sidenavnav-icon' icon={faSuitcase}/></button> Docs</div >
                    <div className='sidenavnav-btn' aria-label='justify' title='Save' onClick={(e)=> setActive('drafts') }> <button> <FontAwesomeIcon className='sidenavnav-icon' icon={faSave}/> </button>  Drafts</div >
                    <div className='sidenavnav-btn' aria-label='justify' title='Save' onClick={(e)=> setActive('current') }> <button> <FontAwesomeIcon className='sidenavnav-icon' icon={faSave}/> </button>  Current</div >
                    <div className='sidenavnav-btn' aria-label='justify' title='Save' onClick={(e)=> setActive('save') }> <button> <FontAwesomeIcon className='sidenavnav-icon' icon={faSave}/> </button>  Save</div >
      </div>
    </div>
  )
}

export default SideNavNav