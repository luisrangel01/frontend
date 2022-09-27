import React, { createContext } from "react";

export const DataContext = createContext();

export const UserProvider = ({ children }) => {
  const value = {};
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default UserProvider;
