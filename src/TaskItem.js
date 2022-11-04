/* eslint-disable react/prop-types */
import React, { memo, useState } from "react";
import { removeToDB, editDB, deleteAll } from "./PouchDb";

const TaskItem = ({ task, taskId, getToDBFun }) => {
  const [inputdata, setInputdata] = useState("");
  const removeTodo = async () => {
    await removeToDB(taskId);
    await getToDBFun();
  };

  const editTodo = async () => {
    await editDB(taskId, { task: inputdata, isDone: false });
    await getToDBFun();
  };

  const deleteAllTask = async () => {
    await deleteAll(taskId);
  };

  return (
    <div>
      <button type="button" onClick={deleteAllTask}>
        ALLDELETE
      </button>
      <br />
      <li>{task}</li>
      <button type="button" onClick={removeTodo}>
        X
      </button>
      <br />
      <button type="button" onClick={editTodo}>
        Edit
      </button>
      <input
        type="text"
        placeholder="EDIT DATA"
        value={inputdata}
        onChange={(e) => {
          setInputdata(e.target.value);
        }}
      />
    </div>
  );
};

export default memo(TaskItem);
