import {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBold, faCode, faEye, faHeading, faImage, faItalic, faLink, faListOl, faListUl, faMars, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import '../css/selector.css'
import showPreview from '../js/showPreview'
import markdownEdit from '../js/markdownEdit'
import { InputContext} from '../hooks/InputContext'
import { RenderPreviewContext } from '../hooks/RenderPreviewContext'
import { SelectedTextContext } from '../hooks/SelectedTextContext'

const Selector = () => {
    const [state, setState] = useContext(RenderPreviewContext)
    const [Input,setInput] = useContext(InputContext)
    const [selected,setSelected] = useContext(SelectedTextContext)

    return (
            <div className='select'>
                <div className='selector'>
                    <button id='head-btn' title='Header' onClick={(e) =>markdownEdit(e,selected,setSelected,Input,setInput)}><FontAwesomeIcon icon={faHeading}/></button>
                    <button id='bold-btn' title='Bold text' onClick={(e) =>markdownEdit(e,selected,setSelected,Input,setInput)}><FontAwesomeIcon icon={faBold}/></button>
                    <button id='italic-btn' title='Italic text' onClick={(e) =>markdownEdit(e,selected,setSelected,Input,setInput)}><FontAwesomeIcon icon={faItalic}/></button>
                    <button id='block-btn' title='Block Quote' onClick={(e) =>markdownEdit(e,selected,setSelected,Input,setInput)}><FontAwesomeIcon icon={faQuoteLeft}/></button>
                    <button id='link-btn'  title='Link' onClick={(e) =>markdownEdit(e,selected,setSelected,Input,setInput)}><FontAwesomeIcon icon={faLink}/></button>
                    <button id='code-btn' title='Code' onClick={(e) =>markdownEdit(e,selected,setSelected,Input,setInput)}><FontAwesomeIcon icon={faCode}/></button>
                    <button id='image-btn' title='Image' onClick={(e) =>markdownEdit(e,selected,setSelected,Input,setInput)}><FontAwesomeIcon icon={faImage}/></button>
                    <button id='ul-btn' title='Un-ordered List' onClick={(e) =>markdownEdit(e,selected,setSelected,Input,setInput)}><FontAwesomeIcon icon={faListUl}/></button>
                    <button id='ol-btn' title='Ordered List' onClick={(e) =>markdownEdit(e,selected,setSelected,Input,setInput)}><FontAwesomeIcon icon={faListOl}/></button>
                </div>
                <div className="showpreview-div">
                    <button ttle='Serach Markdown Syntax' className='showpreview'><FontAwesomeIcon icon={faMars} /></button>
                    <button title='Preview' className='showpreview' onClick={(e) =>showPreview(e,state,setState)}><FontAwesomeIcon icon={faEye} /></button>
                </div>
            </div>
    )
}

export default Selector;