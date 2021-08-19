import React, {useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCoffee, faHeading, faImage, faListOl, faListUl, faParagraph } from '@fortawesome/free-solid-svg-icons'
import '../css/selector.css'
import Title from './Title'
import { SelectInputContext} from '../hooks/SelectInputContext'

const Selector = () => {
    const [Element,setElement] = useContext(SelectInputContext);
    return (
            <div className='select'>
                <div className='selector'>
                    <span onClick={() =>setElement('head')}><FontAwesomeIcon icon={faHeading}/></span>
                    <span onClick={() =>setElement('para')}><FontAwesomeIcon icon={faParagraph}/></span>
                    <span onClick={() =>setElement('code')}><FontAwesomeIcon icon={faCode}/></span>
                    <span onClick={() =>setElement('img')}><FontAwesomeIcon icon={faImage}/></span>
                    <span onClick={() =>setElement('listul')}><FontAwesomeIcon icon={faListUl}/></span>
                    <span onClick={() =>setElement('listol')}><FontAwesomeIcon icon={faListOl}/></span>
                </div>
            </div>
    )
}

export default Selector;