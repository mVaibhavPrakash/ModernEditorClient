import React from 'react'
import '../../css/preview.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import removeStyle from '../../js/removeStyle.js'

const Code = (props) => {
    const match = /language-(\w+)/.exec(props.className || '')
    return (
        <SyntaxHighlighter language={match[1] ?? null} CodeTag={code} customStyle={{height:'100%',backgroundColor:'black',color:'white',fontSize:'.36rem',marginTop:'12px'}}>
            {props.children ?? ''}
        </SyntaxHighlighter>
    )
}

const code = (props) =>{
    console.log(props)
    return(
        <code style={{textShadow:'none',background:'none'}}>{props.children}</code>
    )
}
export default Code
