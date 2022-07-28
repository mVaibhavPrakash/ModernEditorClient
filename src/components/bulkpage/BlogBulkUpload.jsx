import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../../../../LandingpageClient/src/components/Navbar'
import '../../css/blogbulkupload.css'

const BlogBulkUpload = ({footerRef}) => {
  useEffect(() =>{
    footerRef.current.style.display='none'
    return() =>{
        footerRef.current.style.display='block'
    }
},[])
  return (
    <div className='blog-head'>
      <Navbar/>
      <div className='blog-bulk-div'>
        <div className='blog-bulk-content'>
          <FontAwesomeIcon icon={faDownload} className='download-icon'/>
          <div className='blog-bulk-input'>
            <input className='blog-bulk-file' type='file'/>
            <input className='blog-bulk-submit' type='submit' value='Submit'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogBulkUpload