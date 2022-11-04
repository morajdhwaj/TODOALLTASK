import React, { useContext, useState } from "react";
import { ContextBoxSpace } from "./ContextBox";
import { insertToDB } from "./PouchDb";

const InputBox = () => {
  const [inputdata, setInputdata] = useState("");
  const [counter, setCounter] = useState(1);

  const data = useContext(ContextBoxSpace);
  const itemEvent = (e) => {
    setInputdata(e.target.value);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const newTodo = {
  //     task: inputdata,
  //     isDone: false,
  //   };
  //   const response = await insertToDB(newTodo);
  //   newTodo.id = response?.id;
  //   setInputdata("");
  // };

  const handleSubmit = async (e) => {
    setCounter(counter + 1);
    e.preventDefault();
    const newTodo = {
      task: inputdata,
      isDone: false,
    };
    for (let i = 1; i <= counter; i++) {
      await insertToDB(newTodo);
    }
    // eslint-disable-next-line no-unused-vars
    const ret = await data?.getToDBFun();
    setInputdata("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="GIVE TASK INPUT"
          value={inputdata}
          onChange={itemEvent}
        />
        <button>ADD</button>
      </form>
    </div>
  );
};

export default InputBox;
