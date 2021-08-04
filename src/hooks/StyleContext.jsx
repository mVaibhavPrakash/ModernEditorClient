import { createContext, useState } from "react";

const StyleContext = createContext();

const StyleContextProvider = ({Childrens}) =>{
    const [style, setStyle] = useState('');
    <StyleContext.Provider >
        {Childrens}
    </StyleContext.Provider>
}