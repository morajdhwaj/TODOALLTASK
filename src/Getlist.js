import React, { useContext } from "react";
import TaskItem from "./TaskItem";
import { ContextBoxSpace } from "./ContextBox";

const Getlist = () => {
  const data = useContext(ContextBoxSpace);

  return (
    <div>
      <ol>
        {data.taskList.map((taskval, i) => (
          <TaskItem
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

export default Getlist;
