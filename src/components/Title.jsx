import { useState } from 'react';
import '../css/title.css'

const Title = () => {
    const [CoverImage,setCoverImage] = useState('')
    return (
        <div title='Enter url of cover image' className="editor-cover-image"><input type="text" className='editor-cover-image-input' value={CoverImage} onChange={e => setCoverImage(e.target.value)} placeholder='Enter Image Url' /></div>
    )
}

export default Title;
