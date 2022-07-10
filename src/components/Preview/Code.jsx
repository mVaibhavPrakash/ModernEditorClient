import '../../css/preview.css'
import './Blog.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const Code = (props) => {
    const match = /language-(\w+)/.exec(props.className || '')
    let result=[];
    props.inline === true ? result.push(<code className='inline-pre' key={1}>{props.children}</code>) : result.push(<SyntaxHighlighter key={2} language={match !== null ? match[1] : null} CodeTag={code} customStyle={{height:'100%',backgroundColor:'#2d3e50',color:'white',fontSize:'.36rem',marginTop:'12px'}}>
    {props.children}
</SyntaxHighlighter>)
    return (
        <>
        {result}
        </>
    )
}

const code = (props) =>{
    const array= props.children[1].map((value,key) =>{
        if(value.type==="span"){
            console.log(value)
            let style;
            if(value.props.style.background !== undefined)
            {
                delete value.props.style.background;
                style=value.props.style
            }
            else{
                style=value.props.style ?? null
            }
            return <span className={value.props.className ? value.props.className : 'whitespace-span' } key={key} style={style}>{value.props.children}</span>
        }
    })
    return(
        <code className='real-code' style={{textShadow:'none',background:'none'}}>{array}</code>
    )
}
export default Code
