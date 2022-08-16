import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../../../../LandingpageClient/src/components/Navbar'
import '../../css/blogbulkupload.css'

const BlogBulkUpload = ({footerRef}) => {
  useEffect(() =>{
    console.log(footerRef)
    if(footerRef.current !== null && footerRef.current.style.display !=='none')
    footerRef.current.style.display='none'
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