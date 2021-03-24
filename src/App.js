import React, { useState } from "react";
import uuid from "react-uuid";
import "./App.scss";
import Tasks from "./components/Tasks";
import TextInput from "./components/TextInput";

function App() {
  const [itemTodoText, setItemTodoText] = useState("");
  const [todoItems, setTodoItems] = useLocalState("todoList");

  function useLocalState(localItem) {
    const [loc, setState] = useState(
      JSON.parse(localStorage.getItem(localItem) || "[]")
    );
    function setLoc(newItem) {
      localStorage.setItem(localItem, JSON.stringify(newItem));
      setState(newItem);
    }
    return [loc, setLoc];
  }

  const addTodo = (text) => {
    setTodoItems([
      ...todoItems,
      {
        id: uuid(),
        text,
        isDone: false,
        isEditable: false,
      },
    ]);
  };

  const onCompleteTask = (id) => {
    todoItems.forEach((item) => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
    });
    setTodoItems([...todoItems]);
  };

  const onDeleteTask = (id) => {
    setTodoItems([...todoItems.filter((item) => item.id !== id)]);
  };

  const onEditToggle = (id) => {

    todoItems.forEach((item) => {
      if (item.id === id) {
        item.isEditable = !item.isEditable;
        setItemTodoText(item.text);
      }
    });
    setTodoItems([...todoItems]);
  };

  const onEditTask = (id) => (text) => {
    console.log("OnEditTask")
    todoItems.forEach((item) => {
      if (item.id === id) {
        item.text = text;
        item.isEditable = !item.isEditable;
      }
    });
    setTodoItems([...todoItems]);
  };

  return (
    <div className="todo">
      <h1 className="todo__title">Todo List</h1>
      <TextInput
        className="todo__input"
        placeholder="Task name"
        onEnter={addTodo}
        value={itemTodoText}
      />
      <div className="todo-out">
        <p className="todo-out__title">
          {todoItems.length > 0 ? "Tasks:" : "You have no tasks"}
        </p>
        <Tasks
          todoItems={todoItems}
          itemTodoText={itemTodoText}
          setItemTodoText={setItemTodoText}
          onDeleteTask={onDeleteTask}
          onCompleteTask={onCompleteTask}
          onEditToggle={onEditToggle}
          onEditTask={onEditTask}
        />
      </div>
    </div>
  );
}

export default App;
