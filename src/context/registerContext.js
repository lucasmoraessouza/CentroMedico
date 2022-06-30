import React, { createContext, useState, useContext, useEffect } from "react";

export const RegisterContext = createContext({});

export default function CountProvider({ children }) {
  const [components, setComponents] = useState(0);

  return (
    <RegisterContext.Provider
      value={{
        components,
        setComponents,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}

export function StateGlobal() {
  const context = useContext(RegisterContext);
  const { components, setComponents } = context;
  return {
    components,
    setComponents,
  };
}
