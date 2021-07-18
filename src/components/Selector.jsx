import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCoffee, faHeading, faImage, faListOl, faListUl, faParagraph } from '@fortawesome/free-solid-svg-icons'
import '../css/selector.css'

const Selector = () => {
    const [input,setInput] = useState('title')
    return (
        <div>
            <div className="title"><input type="text" placeholder='tiTle!!' /></div>
            <div className='selector'>
                <span onClick={() =>setInput('head')}><FontAwesomeIcon icon={faHeading}/></span>
                <span onClick={() =>setInput('para')}><FontAwesomeIcon icon={faParagraph}/></span>
                <span onClick={() =>setInput('code')}><FontAwesomeIcon icon={faCode}/></span>
                <span onClick={() =>setInput('img')}><FontAwesomeIcon icon={faImage}/></span>
                <span onClick={() =>setInput('listul')}><FontAwesomeIcon icon={faListUl}/></span>
                <span onClick={() =>setInput('listol')}><FontAwesomeIcon icon={faListOl}/></span>
            </div>
        </div>
    )
}

export default Selector;