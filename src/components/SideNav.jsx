import '../css/sideNav.css'
const SideNav = () => {
    return (
        <div className='sideBar'>
            <button id="sideBar-button" onClick={()=>{document.getElementById('edit').className='editor';document.getElementsByClassName('nav')[0].style.width='100vw';}}>X <span>Close</span></button>
            <div id='sideBar-content'>
                <div id='d'>
                    <h2>Are you ready to publish?</h2>
                    <p>Double-check your article settings before publishing.</p>
                </div>
                <div className='sideBar-content-div'>
                    <h3>SEO Title (Optional)</h3>
                    <p style={{wordBreak:'break-word'}}>The SEO Title will be shown in place of your Title on search engine results pages, such as a Google search. SEO titles between 40 and 50 characters with commonly searched words have the best click-through-rates.</p>
                    <textarea type="text" placeholder='Enter meta title' />
                </div>
                <div className='sideBar-content-div'>
                    <h3>SEO Description (Optional)</h3>
                    <p style={{wordBreak:'break-word'}}>The SEO Description will be used in place of your Subtitle on search engine results pages. Good SEO descriptions utilize keywords, summarize the story and are between 140-156 characters long.</p>
                    <textarea type="text" placeholder='Enter meta description'/>
                </div>
            </div>
        </div>
    )
}

export default SideNav
