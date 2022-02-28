import { createContext, useState,ReactNode} from 'react'

export const RenderPreviewContext = createContext(null);

export const RenderPreviewContextProvider = ({children}) =>{

    const [state,setState]= useState<boolean>(false);

    return(
        <RenderPreviewContext.Provider value={[state,setState]}>
            {children}
        </RenderPreviewContext.Provider>
    )
}