import { useState } from 'react';
import '../css/title.css'

const Title = () => {
    const [title,setTitle] = useState('')
    return (
        <div title='Enter Title of the Blog' className="editor-title"><input type="text" className='editor-title-input' value={title} onChange={e => setTitle(e.target.value)} placeholder='tiTle!!' /></div>
    )
}

export default Title;
