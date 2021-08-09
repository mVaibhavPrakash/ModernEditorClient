import React, {useEffect,useState} from 'react'
import '../css/preview.css'

const Preview = () => {
    const [data,setData] = useState();
    useEffect(() =>{
        setData(JSON.parse(localStorage.getItem('data')))
    })
    console.log(data)
    const array=data?.map(function(key, index) {
        if(key.element==="title"){
            let style={}
            for(let i=0;i<key.style.length;i++){
                Object.assign(style,key.style[i]);
            }
            return <title key={index} style={style} id="preview-title">{key.input}</title>
        }
        if(key.element==="head"){
            let style={};
            for(let i=0;i<key.style.length;i++){
                console.log(key.style[i])
                Object.assign(style,key.style[i]);
            }
            return <h3 key={index} style={style}className="preview-head">{key.input}</h3>
        }
        if(key.element==="para"){
            let style={};
            for(let i=0;i<key.style.length;i++){
                Object.assign(style,key.style[i]);
            }
            return <p key={index} style={style} className="preview-para">{key.input}</p>
        }
        if(key.element==="ul"){
            let style={};
            for(let i=0;i<key.style.length;i++){
                Object.assign(style,key.style[i]);
            }
            return <ul key={index} style={style} className="preview-ul">{
                results[key].map(function(value,ind){
                    return <li key={ind}>{value}</li>
                })
            }
            </ul>
        }
        if(key==="ol"){
            let style={};
            for(let i=0;i<key.style.length;i++){
                Object.assign(style,key.style[i]);
            }
            return <ol key={index} className="preview-ol">
                {
                    results[key].map(function(value,ind){
                        return <li key={ind}>{value}</li>
                    })
                }
            </ol>
        }
        if(key==="img"){
            let style={};
            for(let i=0;i<key.style.length;i++){
                Object.assign(style,key.style[i]);
            }
            return <img key={index} src={`${results[key]}`} alt="Image" className="preview-img" />
        }
      })
    return (
        <div className='preview'>
            {
                array
            }
        </div>
    )
}

export default Preview
