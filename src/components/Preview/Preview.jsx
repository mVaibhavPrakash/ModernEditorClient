import React, {useEffect,useState} from 'react'
import ReactMarkdown from 'react-markdown'
import '../../css/preview.css'
import Heading1 from './Heading1'
import Heading2 from './Heading2'
import Heading3 from './Heading3'
import Paragraph from './Pararaph'
import UList from './UList'
import Image from './Image'
import Code from './Code'
import OList from './Olist'
import Edit from './Edit'
import SubmitBlog from './SubmitBlog'

const Preview = () => {
    const [data,setData] = useState();

    const renderers={
        h1:Heading1,
        h2:Heading2,
        h3:Heading3,
        p:Paragraph,
        img:Image,
        code:Code,
        ul:UList,
        ol:OList
    }

    useEffect(() =>{

        if(data!==localStorage.getItem('data'))
            setData(localStorage.getItem('data'))
            
    },[data])
    return (
        <div className='preview'>
            <ReactMarkdown  children={data} components={renderers} />
            <Edit data={data} />
            <SubmitBlog />
        </div>
    )
}

export default Preview
