import React, { createContext, useState } from "react";

export const StyleContext = createContext();

export const StyleContextProvider = ({children}) =>{
    const [Style, setStyle] = useState(null);
    return(
        <StyleContext.Provider value={[Style,setStyle]}>
            {children}
        </StyleContext.Provider>
    )
}