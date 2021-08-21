import '../../css/preview.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'

const Code = (props) => {
    const match = /language-(\w+)/.exec(props.className || '')
    return (
        <SyntaxHighlighter language={match[1] ?? null} CodeTag={code} customStyle={{height:'100%',backgroundColor:'#2d3e50',color:'white',fontSize:'.36rem',marginTop:'12px'}}>
            {props.children ?? ''}
        </SyntaxHighlighter>
    )
}

const code = (props) =>{
    const array= props.children[1].map((value,key) =>{
        if(value.type==="span"){
            let style;
            if(value.props.style.background !== undefined)
            {
                delete value.props.style.background;
                style=value.props.style
            }
            else{
                style=value.props.style ?? null
            }
            return <span className={value.props.className} key={key} style={style}>{value.props.children}</span>
        }
    })
    return(
        <code style={{textShadow:'none',background:'none'}}>{array}</code>
    )
}
export default Code
