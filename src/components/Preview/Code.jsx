import { useEffect } from 'react'
import '../../css/preview.css'
import './Blog.css'
import Prism from 'prismjs'
const Code = (props) => {
    useEffect(() => {
        Prism.highlightAll();
      });
    const match = /language-(\w+)/.exec(props.className || '')
    const lan = match !== null ? match[1] : '';
    let result=[];
    props.inline === true ? result.push(<code className='inline-pre' key={1}>{props.children}</code>) : result.push(<code children={props.children} className={`language-${lan}`} />)
    return (
        <>
             <pre className="code-toolbar" >{result}</pre>
        </>
    )
}

export default Code
