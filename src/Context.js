/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from "react";
import { getToDB } from "./PouchDb";

export const ContextVAR = createContext();

export const Context = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  const getToDBFun = async () => {
    const data = await getToDB();
    console.log("dataComingdb", data);
    setTaskList(data?.rows);
  };

  console.log("BoX DATA", taskList);

  const value = React.useMemo(
    () => ({ getToDBFun, taskList }),
    [taskList.length]
  );

  useEffect(() => {
    getToDBFun();
  }, []);

  return (
    <ContextVAR.Provider value={value}>
      {children}
    </ContextVAR.Provider>
  );
};
