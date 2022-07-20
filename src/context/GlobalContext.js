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
    auxPassword: "",
  });
  const [clientData, setClientData] = useState([]);
  const [scheduleFilter, setScheduleFilter] = useState({
    start: "",
    end: "",
    currentPage: 1,
    lastPage: 1,
    onFilter: false,
  });

  const [resultsFilter, setResultsFilter] = useState({
    start: "",
    end: "",
    currentPage: 1,
    lastPage: 1,
    onFilter: false,
  });

  function verify() {
    setScheduleFilter({
      start: "",
      end: "",
      currentPage: 1,
      lastPage: 1,
      onFilter: false,
    });

    setResultsFilter({
      start: "",
      end: "",
      currentPage: 1,
      lastPage: 1,
      onFilter: false,
    });
  }
  useEffect(() => {
    verify();
  }, [components]);

  return (
    <GlobalContext.Provider
      value={{
        components,
        setComponents,
        data_user,
        setData_user,
        clientData,
        setClientData,
        scheduleFilter,
        setScheduleFilter,
        resultsFilter, 
        setResultsFilter
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
  const { clientData, setClientData } = context;
  const { scheduleFilter, setScheduleFilter } = context;
  const { resultsFilter, setResultsFilter } = context;


  return {
    components,
    setComponents,
    data_user,
    setData_user,
    clientData,
    setClientData,
    scheduleFilter,
    setScheduleFilter,
    resultsFilter, 
    setResultsFilter
  };
}
