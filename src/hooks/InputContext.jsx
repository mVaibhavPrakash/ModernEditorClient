import React,{useState, createContext} from 'react'

export const InputContext = createContext(null);

export const InputContextProvider = ({children}) =>{
    const [Result, setResult] = useState('');
    return(
        <InputContext.Provider value={[Result,setResult]}>
            {children}
        </InputContext.Provider>
    )
}