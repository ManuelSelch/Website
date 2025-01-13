import React, { createContext, useContext, useEffect, useState } from "react";
import http from "../http";

export const createCustomContext = ({ endpoint, initialState }) => {
  const Context = createContext();

  const useCustomContext = () => {
    return useContext(Context);
  };

  const Provider = ({ children }) => {
    const [data, setData] = useState(initialState);

    const fetchData = async () => {
      try {
        const response = await http.get("/api" + endpoint);
        setData(response.data);
      } catch (error) {
        console.error(`${endpoint} fetch error:`, error);
      }
    };

    useEffect(() => {
      fetchData();
    }, []);

    return (
      <Context.Provider value={data}>
        {children}
      </Context.Provider>
    );
  };

  return { Provider, useCustomContext };
};
