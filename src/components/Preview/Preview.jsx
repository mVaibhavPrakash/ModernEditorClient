import {useContext, useEffect,useState} from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import Heading1 from './Heading1'
import Heading2 from './Heading2'
import Heading3 from './Heading3'
import Paragraph from './Paragraph'
import UList from './UList'
import Image from './Image'
import Blockquote from './Blockquote'
import Code from './Code'
import OList from './Olist'
import Link from './Link'
import Pre from './Pre'
import '../../css/preview.css'
import { InputContext } from '../../hooks/InputContext'

const Preview = () => {
    const [Result,setResultt] = useContext(InputContext)
    const renderers={
        h1:Heading1,
        h2:Heading2,
        h3:Heading3,
        p:Paragraph,
        img:Image,
        pre:Pre,
        code:Code,
        ul:UList,
        ol:OList,
        a:Link,
        blockquote:Blockquote
    }
    return (
        <div className='editor-preview-content' style={{
            margin: '0.5rem',
            marginTop: '0.25rem'}}>
            <ReactMarkdown  children={Result} components={renderers} rehypePlugins={[gfm]} />
        </div>
    )
}

export default Preview
