import React, {useState, createContext} from 'react'

export const InputContext = createContext();

export const InputContextProvider = ({children}) =>{
    const [Input, setInput] = useState(" ");
    return(
        <InputContext.Provider value={[Input, setInput]}>
            {children}
        </InputContext.Provider>
    )
}