import React, { useState, createContext } from "react";

export const SelectInputContext = createContext();

export const SelectInputProvider = ({children}) => {
    const [Element,setElement] = useState('');
    const [Style, setStyle] = useState(null);
    const [Input, setInput] = useState('');
    return (
        <SelectInputContext.Provider value={[Element,setElement,Style,setStyle,Input,setInput]}>
            {children}
        </SelectInputContext.Provider>
    )
}

