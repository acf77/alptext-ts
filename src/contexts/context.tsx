import React, { createContext } from "react";

type DocData = {
    objGeral: string;
}

export const Context = createContext<DocData>({} as DocData);

export const ContextProvider = ({ children }) => (
    <Context.Provider value={{ objGeral: "eita" }}>
        { children }
    </Context.Provider>
);

