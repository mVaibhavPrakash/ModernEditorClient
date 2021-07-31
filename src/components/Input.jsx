import React, {useContext} from 'react'
import '../css/input.css'
import { SelectInputContext} from '../hooks/SelectInputContext'

export const Input = () => {
    const [Element,setElement]= useContext(SelectInputContext)
    return (
        <div className='blogInputDiv'>
            <textarea type="text" className="blogInput" />
        </div>
    )
}
