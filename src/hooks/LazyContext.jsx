import {createContext,useState} from 'react'

export const LazyContext = createContext();

export const LazyContextProvider = ({children}) =>{

    const [isClicked,setClicked] = useState(false)

    return(
        <LazyContext.Provider value={[isClicked,setClicked]}>
            {children}
        </LazyContext.Provider>
    )
}