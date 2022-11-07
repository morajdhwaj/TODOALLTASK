import React, { useContext, useState } from "react";
import {  ContextVAR } from "./Context";
import { insertDB, } from "./PouchDb";

const Insert = () => {
  const [insertItem, setinsertItem] = useState("");
  const [counter, setCounter] = useState(1);

  const data = useContext(ContextVAR);
  const itemEvent = (e) => {
    setinsertItem(e.target.value);
  };

 
  const handleSubmit = async (e) => {
    setCounter(counter + 1);
    e.preventDefault();
    const newTodo = {
      task: insertItem,
      isDone: false,
    };
    for (let i = 1; i <= counter; i++) {
      await insertDB(newTodo);
    }
    // eslint-disable-next-line no-unused-vars
    const ret = await data?.getToDBFun();
    setinsertItem("");
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold py-3 ">TODO</h1>
      <div className="flex">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add Todo"
            value={insertItem}
            onChange={itemEvent}
            className="border"
          />
          <button className="ml-5 border-black bg-green-500 px-3 py-1 text-white">
            ADD
          </button>
        </form>
      </div>
    </div>
  );
};

export default Insert;
