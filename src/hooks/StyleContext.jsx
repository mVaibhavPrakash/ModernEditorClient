import React, { createContext, useState } from "react";

export const StyleContext = createContext();

export const StyleContextProvider = ({children}) =>{
    const [Style, setStyle] = useState({});
    return(
        <StyleContext.Provider value={[Style,setStyle]}>
            {children}
        </StyleContext.Provider>
    )
}