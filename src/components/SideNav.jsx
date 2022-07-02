import closeModal from '../js/closeModal'
import '../css/sideNav.css'

const SideNav = ({ModalRef}) => {
    return (
        
        <div className='editor-sideBar'>
            <button id="editor-sideBar-button" onClick={(e)=>closeModal(e,ModalRef)}>X <span>Close</span></button>
            <div id='editor-sideBar-content'>
                <div id='editor-d'>
                    <h2>Are you ready to publish?</h2>
                    <p>Double-check your article settings before publishing.</p>
                </div>
                <div className='editor-sideBar-content-div'>
                    <h3>SEO Title (Required)</h3>
                    <p style={{wordBreak:'break-word'}}>The SEO Title will be shown in place of your Title on search engine results pages, such as a Google search. SEO titles between 40 and 50 characters with commonly searched words have the best click-through-rates.</p>
                    <textarea placeholder='Enter meta title' id='editor-textarea-seo-title'/>
                </div>
                <div className='editor-sideBar-content-div'>
                    <h3>SEO Description (Optional)</h3>
                    <p style={{wordBreak:'break-word'}}>The SEO Description will be used in place of your Subtitle on search engine results pages. Good SEO descriptions utilize keywords, summarize the story and are between 140-156 characters long.</p>
                    <textarea placeholder='Enter meta description' id='editor-textarea-seo-desc'/>
                </div>
                <div className="editor-sideBar-content-div">
                    <h3>Disable comments?</h3>
                    <p><input type="checkbox" name="Yes" id="editor-check" /> Yes</p>
                </div>
                <input type='submit' id='editor-input-seo-title' value='Submit Blog'/>
            </div>
    </div>

    )

}

export default SideNav;
