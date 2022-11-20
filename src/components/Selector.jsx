import {useContext, useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBold, faCode, faCog, faHeading, faImage, faItalic, faLink, faListOl, faListUl, faQuoteLeft, faRedo, faTable, faUndo } from '@fortawesome/free-solid-svg-icons'
import { InputContext} from '../hooks/InputContext'
import { RenderPreviewContext } from '../hooks/RenderPreviewContext'
import { SelectedTextContext } from '../hooks/SelectedTextContext'
import showPreview from '../js/showPreview'
import markdownEdit from '../js/markdownEdit'
//import { undoEvent,redoEvent } from '../js/custommEvent'
import '../css/selector.css'

const Selector = ({ModalRef,InputRef}) => {
    const [state,setState]= useContext(RenderPreviewContext)
    const [Result,setResult] = useContext(InputContext)
    const [selected, setSelected] = useContext(SelectedTextContext)
    const [eventObject,setObject] = useState({})
    /*useEffect(() =>{
        (async () =>{
            const {default : customEvent} = await import('../js/custommEvent')
            const obj = customEvent();
            setObject(obj)
        })()
    },[])*/

    return (
            <div className='editor-select'>
                <div className='editor-selector'>
                    <button aria-label='justify'  title='Settings' onClick={(e) =>showPreview(e,ModalRef,state,setState,Result)}><FontAwesomeIcon icon={faCog} /></button>
                    <button id='editor-head-btn' aria-label='justify' title='Header' onClick={(e) =>markdownEdit(e,'head-btn',selected,setSelected,Result,setResult,InputRef)}><FontAwesomeIcon icon={faHeading}/></button>
                    <button id='editor-bold-btn' aria-label='justify'  title='Bold text' onClick={(e) =>markdownEdit(e,'bold-btn',selected,setSelected,Result,setResult,InputRef)}><FontAwesomeIcon icon={faBold}/></button>
                    <button id='editor-italic-btn' aria-label='justify'  title='Italic text' onClick={(e) =>markdownEdit(e,'italic-btn',selected,setSelected,Result,setResult,InputRef)}><FontAwesomeIcon icon={faItalic}/></button>
                    <button id='editor-block-btn' aria-label='justify'  title='Block Quote' onClick={(e) =>markdownEdit(e,'block-btn',selected,setSelected,Result,setResult,InputRef)}><FontAwesomeIcon icon={faQuoteLeft}/></button>
                    <button id='editor-link-btn' aria-label='justify'  title='Link' onClick={(e) =>markdownEdit(e,'link-btn',selected,setSelected,Result,setResult,InputRef)}><FontAwesomeIcon icon={faLink}/></button>
                    <button id='editor-code-btn' aria-label='justify'  title='Code' onClick={(e) =>markdownEdit(e,'code-btn',selected,setSelected,Result,setResult,InputRef)}><FontAwesomeIcon icon={faCode}/></button>
                    <button id='editor-image-btn' aria-label='justify'  title='Image' onClick={(e) =>markdownEdit(e,'image-btn',selected,setSelected,Result,setResult,InputRef)}><FontAwesomeIcon icon={faImage}/></button>
                    <button id='editor-ul-btn' aria-label='justify'  title='Un-ordered List' onClick={(e) =>markdownEdit(e,'ul-btn',selected,setSelected,Result,setResult,InputRef)}><FontAwesomeIcon icon={faListUl}/></button>
                    <button id='editor-ol-btn' aria-label='justify'  title='Ordered List' onClick={(e) =>markdownEdit(e,'ol-btn',selected,setSelected,Result,setResult,InputRef)}><FontAwesomeIcon icon={faListOl}/></button>
                    <button id='editor-table-btn' aria-label='justify'  title='Insert Table' onClick={(e) =>markdownEdit(e,'table-btn',selected,setSelected,Result,setResult,InputRef)} ><FontAwesomeIcon icon={faTable} /></button>
                </div>
            </div>
    )
}

export default Selector;
