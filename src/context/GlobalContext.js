import React, { createContext, useState, useContext, useEffect } from "react";

export const GlobalContext = createContext({});

export default function CountProvider({ children }) {
  const [components, setComponents] = useState(0);
  const [data_user, setData_user] = useState({
    name: "",
    cpf: "",
    birthday: "",
    email: "",
    phone: "",
    password: "",
    token: "",
  });

  return (
    <GlobalContext.Provider
      value={{
        components,
        setComponents,
        data_user,
        setData_user,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function StateGlobal() {
  const context = useContext(GlobalContext);
  const { components, setComponents } = context;
  const { data_user, setData_user } = context;
  return {
    components,
    setComponents,
    data_user,
    setData_user,
  };
}
