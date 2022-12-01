import {
  faSquare,
  faSquareCheck,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { CSSProperties, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../../models/Todo";
// import {
//   addTodo,
//   AppStateAction,
//   deleteTodo,
//   toggleTodo,
// } from "../../store/plain/actions";
import { AppState } from "../../store/plain/reducers";
import { v4 as uuid } from "uuid";
import { AppDispatch, AppStateToolkit } from "../../store/toolkit/store";
import { addTodo, deleteTodo, toggleTodo } from "../../store/toolkit/todoSlice";

const TodoFunct = () => {
  // use with React-Redux
  // const items = useSelector<AppState, Todo[]>((state) => state.todo.todos);
  // const darkMode = useSelector<AppState, boolean>(
  //   (state) => state.theme.darkMode
  // );

  // use with Redux-Toolkit
  const items = useSelector<AppStateToolkit, Todo[]>((state) => state.todo.todos);
  const darkMode = useSelector<AppStateToolkit, boolean>(
    (state) => state.theme.darkMode
  );

  const dispatch = useDispatch<AppDispatch>();
  const [inputText, setInputText] = useState("");

  const handleAddTodo = (evt: React.MouseEvent) => {
    evt.preventDefault();

    dispatch(
      addTodo({
        id: uuid(),
        description: inputText,
        completed: false,
      })
    );

    setInputText("");
  };

  const handleToggle = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  const todoItems = items.map((item) => (
    <li key={item.id}>
      <FontAwesomeIcon
        style={{ marginRight: "5px" }}
        icon={item.completed ? faSquareCheck : faSquare}
        onClick={() => handleToggle(item.id)}
      />
      <span style={item.completed ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <FontAwesomeIcon
        style={{ marginLeft: "10px" }}
        icon={faTrash}
        color={"crimson"}
        onClick={() => handleDelete(item.id)}
      />
    </li>
  ));

  const listStyle: CSSProperties = {
    listStyleType: "none",
    textAlign: "left",
  };

  return (
    <div
      className="container"
      style={
        darkMode ? { backgroundColor: "black", color: "paleturquoise" } : {}
      }
    >
      <div className="row md-2">
        <div className="col-12">
          <h3>Todo List (Function)</h3>
        </div>
      </div>
      <div className="row md-2">
        <div className="col-12">
          <ul style={listStyle}>{todoItems}</ul>
        </div>
      </div>
      <div className="row md-2">
        <div className="col-12">
          <input
            type="text"
            value={inputText}
            onChange={(evt) => setInputText(evt.target.value)}
          />
          <button className="btn btn-danger" onClick={handleAddTodo}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoFunct;
