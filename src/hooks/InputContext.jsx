import React,{useState, createContext} from 'react'

export const InputContext = createContext(null);

export const InputContextProvider = ({children}) =>{
    const [Result, setResult] = useState('');
    const [Input, setInput] = useState('');
    return(
        <InputContext.Provider value={[Result,setResult,Input,setInput]}>
            {children}
        </InputContext.Provider>
    )
}