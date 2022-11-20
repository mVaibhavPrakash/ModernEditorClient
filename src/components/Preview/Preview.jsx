import {useContext} from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Heading1 from './Heading1'
import Heading2 from './Heading2'
import Heading3 from './Heading3'
import UList from './UList'
import Image from './Image'
import Blockquote from './Blockquote'
import Code from './Code'
import OList from './Olist'
import Link from './Link'
import Pre from './Pre'
import Table from './Table'
import '../../css/preview.css'
import { InputContext } from '../../hooks/InputContext'
import Paragraph from './Paragraph'

const Preview = ({ContentRef}) => {
    const [Result,setResult,Input,setInput] = useContext(InputContext)
    const renderers={
        h1:Heading1,
        h2:Heading2,
        h3:Heading3,
        img:Image,
        pre:Pre,
        code:Code,
        ul:UList,
        ol:OList,
        p:Paragraph,
        a:Link,
        blockquote:Blockquote,
        table:Table
    }
    return (
        <div className='editor-preview-content' ref={ContentRef} >
            <ReactMarkdown  children={Result} components={renderers} remarkPlugins={[remarkGfm]} />
        </div>
    )
}

export default Preview
