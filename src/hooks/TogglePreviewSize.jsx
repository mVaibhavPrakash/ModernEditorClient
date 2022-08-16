import { setAutoFreeze } from 'immer';
import {createContext,useState} from 'react'


export const TogglePreviewSize=createContext(null);

export const TogglePreviewSizeProvider = ({children}) =>{
    const [isFullSize,setFullSize] = useState(false)
    return(
        <TogglePreviewSize.Provider value={[isFullSize, setFullSize]}>
            {children}
        </TogglePreviewSize.Provider>
    )
}