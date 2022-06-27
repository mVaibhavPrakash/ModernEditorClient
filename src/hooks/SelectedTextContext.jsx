import {useState,createContext} from 'react'

export const SelectedTextContext = createContext(null)

export const SelectedTextContextProvider = ({children}) =>{

    const [selected, setSelected] = useState('')

    return(
        < SelectedTextContext.Provider value={[selected, setSelected]}>
            {children}
        </ SelectedTextContext.Provider>
    )
}