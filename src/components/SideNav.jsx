import '../css/sideNav.css'
import clickNav from '../js/clickNav'
const SideNav = ({NavRef, SidebarRef, EditRef,EditorDivRef}) => {
    return (
        <div className='sideBar'>
            <button id="sideBar-button" onClick={()=>clickNav(NavRef,SidebarRef, EditRef,EditorDivRef)}>X <span>Close</span></button>
            <div id='sideBar-content'>
                <div id='d'>
                    <h2>Are you ready to publish?</h2>
                    <p>Double-check your article settings before publishing.</p>
                </div>
                <div className='sideBar-content-div'>
                    <h3>SEO Title (Optional)</h3>
                    <p style={{wordBreak:'break-word'}}>The SEO Title will be shown in place of your Title on search engine results pages, such as a Google search. SEO titles between 40 and 50 characters with commonly searched words have the best click-through-rates.</p>
                    <textarea type="text" placeholder='Enter meta title' id='textarea-seo-title'/>
                </div>
                <div className='sideBar-content-div'>
                    <h3>SEO Description (Optional)</h3>
                    <p style={{wordBreak:'break-word'}}>The SEO Description will be used in place of your Subtitle on search engine results pages. Good SEO descriptions utilize keywords, summarize the story and are between 140-156 characters long.</p>
                    <textarea type="text" placeholder='Enter meta description' id='textarea-seo-desc'/>
                </div>
                <div className="sideBar-content-div">
                    <h3>Disable comments?</h3>
                    <p><input type="checkbox" name="Yes" id="check" /> Yes</p>
                </div>
                <div className="sideBar-content-div">
                    <h3>Disable comments?</h3>
                    <p><input type="checkbox" name="Yes" id="check" /> Yes</p>
                </div>
                <div className="sideBar-content-div">
                    <h3>Disable comments?</h3>
                    <p><input type="checkbox" name="Yes" id="check" /> Yes</p>
                </div>
            </div>
        </div>
    )
}

export default SideNav;
