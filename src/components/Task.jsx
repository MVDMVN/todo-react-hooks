import React from "react";
import classNames from "classnames";
import TextInput from "./TextInput";

const Task = (props) => {
  return (
    <li
      className={classNames("tasks__item", {
        done: props.item.isDone,
      })}>
      <div className="item__input">
        <input
          className="item__checkbox"
          type="checkbox"
          value={props.item.isDone}
          checked={props.item.isDone}
          onChange={() => props.onCompleteTask(props.item.id)}
        />
        {props.item.isEditable ? (
          <TextInput
            className="item__edit"
            value={props.item.text}
            onBlur={props.onEditTask}
            onEnter={props.onEditTask}
            autoFocus
          />
        ) : (
          <span
            className="item__text"
            onDoubleClick={() => props.onEditToggle(props.item.id)}>
            {props.item.text}
          </span>
        )}
      </div>
      <button
        className="item__button"
        onClick={() => {
          props.onDeleteTask(props.item.id)
        }}>
        Delete
      </button>
    </li>
  );
}

export default Task;
