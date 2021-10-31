import React, { createContext, useState } from "react";

type DocData = {
  objGeral: string;
  setObjGeral: object;
  objEspecifico: string;
  setObjEspecifico: object;
  amostra: string;
  setAmostra: object;
};
export const Context = createContext<DocData>({} as DocData);

export const ContextProvider = ({ children }) => {
  const [objGeral, setObjGeral] = useState('');
  const [objEspecifico, setObjEspecifico] = useState('');
  const [amostra, setAmostra] = useState('');

  return (
    <Context.Provider
      value={{
        objGeral,
        setObjGeral,
        objEspecifico,
        setObjEspecifico,
        amostra,
        setAmostra,
      }}
    >
      {children}
    </Context.Provider>
  );
};
