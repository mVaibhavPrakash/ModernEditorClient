import { useState } from 'react';
import closeModal from '../js/closeModal'
import '../css/sideNav.css'
import SideNavNav from './SideNavNav';
import Setting from './Setting';

const SideNav = ({ModalRef}) => {
    const [Active,setActive] = useState('setting')
    return (
        <div className='editor-sideBar'>
            <SideNavNav setActive={setActive}/>
            <div id='editor-sideBar-content'>
                <div id="editor-sideBar-button">
                    <button id='sideBar-btn' onClick={(e)=>closeModal(e,ModalRef)}>X <span>Close</span></button>
                </div>
                {Active === 'setting' ? <Setting/>:''}
                {Active === 'share' ? <Share/>:''}
                {Active === 'print' ? <Print/>:''}
                {Active === 'cheat' ? <Cheat/>:''}
                {Active === 'print' ? <Print/>:''}
                {Active === 'print' ? <Print/>:''}
                {Active === 'print' ? <Print/>:''}
            </div>
        </div>

    )

}

export default SideNav;
