import React, {useEffect,useState} from 'react'
import '../../css/preview.css'
import Heading1 from './Heading1'
import Heading2 from './Heading2'
import Heading3 from './Heading3'
import ReactMarkdown from 'react-markdown'

const Preview = () => {
    const [data,setData] = useState();

    const renderers={
        h1:Heading1,
        h2:Heading2,
        h3:Heading3
    }

    useEffect(() =>{

        if(data!==localStorage.getItem('data'))
            setData(localStorage.getItem('data'))
            
    },[data])
    return (
        <div className='preview'>
            <ReactMarkdown  children={data} components={renderers} />
        </div>
    )
}

export default Preview
