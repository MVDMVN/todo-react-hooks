import React from "react";
import Task from "./Task";

const Tasks = (props) => {
  return (
    <ul className="tasks__items">
      {props.todoItems.map((item) => {
        return (
          <Task
            key={item.id}
            item={item}
            itemTodoText={props.itemTodoText}
            setItemTodoText={props.setItemTodoText}
            onDeleteTask={props.onDeleteTask}
            onCompleteTask={props.onCompleteTask}
            onEditToggle={props.onEditToggle}
            onEditTask={props.onEditTask}
          />
        );
      })}
    </ul>
  );
}

export default Tasks;
