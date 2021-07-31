import React, { useState, createContext } from "react";

export const SelectInputContext = createContext();

export const SelectInputProvider = ({children}) => {
    const [Element,setElement] = useState('');
    return (
        <SelectInputContext.Provider value={[Element,setElement]}>
            {children}
        </SelectInputContext.Provider>
    )
}

