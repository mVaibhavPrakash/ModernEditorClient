import {useContext} from 'react'
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
                    <button title='Header' onClick={() =>setElement('head')}><FontAwesomeIcon icon={faHeading}/></button>
                    <button title='Bold text' onClick={() =>setElement('bold')}><FontAwesomeIcon icon={faBold}/></button>
                    <button title='Italic text' onClick={() =>setElement('italic')}><FontAwesomeIcon icon={faItalic}/></button>
                    <button title='Block Quote' onClick={() =>setElement('quote')}><FontAwesomeIcon icon={faQuoteLeft}/></button>
                    <button title='Link' onClick={() =>setElement('link')}><FontAwesomeIcon icon={faLink}/></button>
                    <button title='Code' onClick={() =>setElement('code')}><FontAwesomeIcon icon={faCode}/></button>
                    <button title='Image' onClick={() =>setElement('img')}><FontAwesomeIcon icon={faImage}/></button>
                    <button title='Un-ordered List' onClick={() =>setElement('listul')}><FontAwesomeIcon icon={faListUl}/></button>
                    <button title='Ordered List' onClick={() =>setElement('listol')}><FontAwesomeIcon icon={faListOl}/></button>
                </div>
                <div className="showpreview-div">
                    <button ttle='Serach Markdown Syntax' className='showpreview'><FontAwesomeIcon icon={faMars} /></button>
                    <button title='Preview' className='showpreview' onClick={(e) =>showPreview(e,state,setState)}><FontAwesomeIcon icon={faEye} /></button>
                </div>
            </div>
    )
}

export default Selector;