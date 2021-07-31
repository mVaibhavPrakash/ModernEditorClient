import React from 'react'

const Preview = () => {
    const results={
        'title':"hello",
        'head':'hello world',
        'para':'how are you',
        'ol':['milk','coffe','hdh']
    }
    const array=Object.keys(results).map(function(key, index) {
        if(key==='title'){
            return <title key={index} id="preview-title">{results[key]}</title>
        }
        if(key==='head'){
            return <h3 key={index} className="preview-head">{results[key]}</h3>
        }
        if(key==='para'){
            return <p key={index} className="preview-para">{results[key]}</p>
        }
        if(key==='ul'){
            return <ul key={index} className="preview-ul">{
                results[key].map(function(value,ind){
                    return <li key={ind}>{value}</li>
                })
            }
            </ul>
        }
        if(key==='ol'){
            return <ol key={index} className="preview-ul">
                {
                    results[key].map(function(value,ind){
                        return <li key={ind}>{value}</li>
                    })
                }
            </ol>
        }
        if(key==='img'){
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
