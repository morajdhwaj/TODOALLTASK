/* eslint-disable react/prop-types */
import React, { memo, useState } from "react";
import {  editDB, removeDB } from "./PouchDb";

const ListItem = ({ task, taskId, getToDBFun }) => {
  const [inputdata, setInputdata] = useState("");
  const removeTodo = async () => {
    await removeDB(taskId);
    await getToDBFun();
  };

  const editTodo = async () => {
    await editDB(taskId, { task: inputdata, isDone: false });
    await getToDBFun();
  };

  
  return (
    <div className="space-y-1">
            <br />
      <li className="p-2 text-xl  ">{task}</li>
      <button type="button" onClick={removeTodo}  className="bg-red-200 p-1">
        Delete
      </button>
      <br />
      <button type="button" className="pr-5" onClick={editTodo}>
        Edit
      </button>
      <input
        type="text"
        placeholder="Edit TODO"
        className="border"
        value={inputdata}
        onChange={(e) => {
          setInputdata(e.target.value);
        }}
      />
    </div>
  );
};

export default memo(ListItem);
