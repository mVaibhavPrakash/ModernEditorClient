import {createContext,useState} from 'react'

export const EditContext=createContext();

export const EditContextProvider = ({children}) =>{
    const [isEdit, setEdit] = useState(false);
    return(
        <EditContext.Provider value={[isEdit, setEdit]}>
            {children}
        </EditContext.Provider>
    )
}