import {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBold, faCode, faEye, faHeading, faImage, faItalic, faLink, faListOl, faListUl, faMars, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { InputContext} from '../hooks/InputContext'
import { RenderPreviewContext } from '../hooks/RenderPreviewContext'
import { SelectedTextContext } from '../hooks/SelectedTextContext'
import showPreview from '../js/showPreview'
import markdownEdit from '../js/markdownEdit'
import '../css/selector.css'

const Selector = ({ModalRef}) => {
    const [state, setState] = useContext(RenderPreviewContext)
    const [Input,setInput] = useContext(InputContext)
    const [selected,setSelected] = useContext(SelectedTextContext)

    return (
            <div className='editor-select'>
                <div className='editor-selector'>
                    <button id='editor-head-btn' aria-label='justify' title='Header' onClick={(e) =>markdownEdit(e,'head-btn',selected,Input,setInput)}><FontAwesomeIcon icon={faHeading}/></button>
                    <button id='editor-bold-btn' aria-label='justify'  title='Bold text' onClick={(e) =>markdownEdit(e,'bold-btn',selected,Input,setInput)}><FontAwesomeIcon icon={faBold}/></button>
                    <button id='editor-italic-btn' aria-label='justify'  title='Italic text' onClick={(e) =>markdownEdit(e,'italic-btn',selected,Input,setInput)}><FontAwesomeIcon icon={faItalic}/></button>
                    <button id='editor-block-btn' aria-label='justify'  title='Block Quote' onClick={(e) =>markdownEdit(e,'block-btn',selected,Input,setInput)}><FontAwesomeIcon icon={faQuoteLeft}/></button>
                    <button id='editor-link-btn' aria-label='justify'  title='Link' onClick={(e) =>markdownEdit(e,'link-btn',selected,Input,setInput)}><FontAwesomeIcon icon={faLink}/></button>
                    <button id='editor-code-btn' aria-label='justify'  title='Code' onClick={(e) =>markdownEdit(e,'code-btn',selected,Input,setInput)}><FontAwesomeIcon icon={faCode}/></button>
                    <button id='editor-image-btn' aria-label='justify'  title='Image' onClick={(e) =>markdownEdit(e,'imae-btn',selected,Input,setInput)}><FontAwesomeIcon icon={faImage}/></button>
                    <button id='editor-ul-btn' aria-label='justify'  title='Un-ordered List' onClick={(e) =>markdownEdit(e,'ul-btn',selected,Input,setInput)}><FontAwesomeIcon icon={faListUl}/></button>
                    <button id='editor-ol-btn' aria-label='justify'  title='Ordered List' onClick={(e) =>markdownEdit(e,'ol-btn',selected,Input,setInput)}><FontAwesomeIcon icon={faListOl}/></button>
                </div>
                <div className="editor-showpreview-div">
                    <button aria-label='justify'  title='Serach Markdown Syntax' className='editor-showpreview'><FontAwesomeIcon icon={faMars} /></button>
                    <button aria-label='justify'  title='Preview' className='editor-showpreview' onClick={(e) =>showPreview(e,ModalRef,state,setState,Input)}><FontAwesomeIcon icon={faEye} /></button>
                </div>
            </div>
    )
}

export default Selector;
