import React, {useState,useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faEye, faHeading, faImage, faListOl, faListUl, faMars, faParagraph } from '@fortawesome/free-solid-svg-icons'
import showPreview from '../js/showPreview'
import { SelectInputContext} from '../hooks/SelectInputContext'
import '../css/selector.css'
import { RenderPreviewContext } from '../hooks/RenderPreviewContext'

const Selector = () => {

    const [Element,setElement] = useContext(SelectInputContext);
    const [state, setState] = useContext(RenderPreviewContext)

    return (
            <div className='select'>
                <div className='selector'>
                    <span title='Select Header' onClick={() =>setElement('head')}><FontAwesomeIcon icon={faHeading}/></span>
                    <span title='Select Paragraph' onClick={() =>setElement('para')}><FontAwesomeIcon icon={faParagraph}/></span>
                    <span title='Select Code' onClick={() =>setElement('code')}><FontAwesomeIcon icon={faCode}/></span>
                    <span title='Select Image' onClick={() =>setElement('img')}><FontAwesomeIcon icon={faImage}/></span>
                    <span title='Select Un-ordered List' onClick={() =>setElement('listul')}><FontAwesomeIcon icon={faListUl}/></span>
                    <span title='Select Ordered List' onClick={() =>setElement('listol')}><FontAwesomeIcon icon={faListOl}/></span>
                </div>
                <div className="showpreview-div">
                    <span ttle='Serach Markdown Syntax' className='showpreview'><FontAwesomeIcon icon={faMars} /></span>
                    <span title='Preview' className='showpreview' onClick={(e) =>showPreview(e,state,setState)}><FontAwesomeIcon icon={faEye} /></span>
                </div>
            </div>
    )
}

export default Selector;