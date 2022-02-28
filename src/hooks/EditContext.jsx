import React, {createContext,useState} from 'react'


export const EditContext=createContext(null);

export const EditContextProvider = ({children}) =>{
    const [isEdit, setEdit] = useState(false);
    return(
        <EditContext.Provider value={[isEdit, setEdit]}>
            {children}
        </EditContext.Provider>
    )
}