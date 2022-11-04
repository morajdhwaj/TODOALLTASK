import React, { useContext } from "react";
import { ContextVAR } from "./Context";
import ListItem from "./ListItem";
import { deleteAll } from "./PouchDb";

const List = (taskId) => {
  const data = useContext(ContextVAR);
  const deleteAllTask = async () => {
    await deleteAll(taskId);
  };


  return (
    <div >
      <button className="text-center bg-slate-300 p-2" type="button" onClick={deleteAllTask}>
        Delete delete
      </button>

      <ol>
        {data.taskList.map((taskval, i) => (
          <ListItem
            task={taskval.doc.task}
            taskId={taskval.id}
            key={taskval.id}
            getToDBFun={data?.getToDBFun}
            todoIndex={i}
          />
        ))}
      </ol>
    </div>
  );
};

export default List;
