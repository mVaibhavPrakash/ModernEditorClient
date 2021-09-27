import {useEffect,useState} from 'react'
import ReactMarkdown from 'react-markdown'
import '../../css/preview.css'
import Heading1 from './Heading1'
import Heading2 from './Heading2'
import Heading3 from './Heading3'
import Paragraph from './Paragraph'
import UList from './UList'
import Image from './Image'
import Blockquote from './Blockquote'
import Code from './Code'
import OList from './Olist'
import Edit from './Edit'
import SubmitBlog from './SubmitBlog'

const Preview = ({ModalRef,dat}) => {
    const [data,setData] = useState();
    const renderers={
        h1:Heading1,
        h2:Heading2,
        h3:Heading3,
        p:Paragraph,
        img:Image,
        code:Code,
        ul:UList,
        ol:OList,
        blockquote:Blockquote
    }

    useEffect(() =>{
        if(data !== localStorage.getItem('data')){
            setData(localStorage.getItem('data'))
        }
            
    },[data,dat])
    return (
        <div className='preview' style={{marginBottom:'20px',overflow:'scroll'}}>
            <div style={{display:'flex',justifyContent:'flex-start',marginTop:'15px'}}>
                <Edit ModalRef={ModalRef} data={data} />
                <SubmitBlog data={data}/>
            </div>
            <ReactMarkdown  children={data} components={renderers} />
        </div>
    )
}

export default Preview
