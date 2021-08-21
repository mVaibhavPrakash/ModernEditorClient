import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBold, faCode, faEye, faHeading, faImage, faItalic, faLink, faListOl, faListUl, faMars, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
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
                    <span title='Header' onClick={() =>setElement('head')}><FontAwesomeIcon icon={faHeading}/></span>
                    <span title='Bold text' onClick={() =>setElement('bold')}><FontAwesomeIcon icon={faBold}/></span>
                    <span title='Italic text' onClick={() =>setElement('italic')}><FontAwesomeIcon icon={faItalic}/></span>
                    <span title='Block Quote' onClick={() =>setElement('quote')}><FontAwesomeIcon icon={faQuoteLeft}/></span>
                    <span title='Link' onClick={() =>setElement('link')}><FontAwesomeIcon icon={faLink}/></span>
                    <span title='Code' onClick={() =>setElement('code')}><FontAwesomeIcon icon={faCode}/></span>
                    <span title='Image' onClick={() =>setElement('img')}><FontAwesomeIcon icon={faImage}/></span>
                    <span title='Un-ordered List' onClick={() =>setElement('listul')}><FontAwesomeIcon icon={faListUl}/></span>
                    <span title='Ordered List' onClick={() =>setElement('listol')}><FontAwesomeIcon icon={faListOl}/></span>
                </div>
                <div className="showpreview-div">
                    <span ttle='Serach Markdown Syntax' className='showpreview'><FontAwesomeIcon icon={faMars} /></span>
                    <span title='Preview' className='showpreview' onClick={(e) =>showPreview(e,state,setState)}><FontAwesomeIcon icon={faEye} /></span>
                </div>
            </div>
    )
}

export default Selector;