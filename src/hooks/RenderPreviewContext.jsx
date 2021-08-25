import { createContext, useState} from 'react'

export const RenderPreviewContext = createContext();

export const RenderPreviewContextProvider = ({children}) =>{

    const [state,setState]= useState(0);

    return(
        <RenderPreviewContext.Provider value={[state,setState]}>
            {children}
        </RenderPreviewContext.Provider>
    )
}