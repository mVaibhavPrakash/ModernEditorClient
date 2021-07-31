import React, {useState, createContext} from 'react'

export const InputContext = createContext();

export const InputProvider = ({Childrens}) =>{
    const [Input, setInput] = useState('');
    return(
        <InputContext.Provider value={[Input, setInput]}>
            {Childrens}
        </InputContext.Provider>
    )
}