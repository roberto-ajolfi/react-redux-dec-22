import {
  faSquare,
  faSquareCheck,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, CSSProperties } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { v4 as uuid } from "uuid";
import Todo from "../../models/Todo";
import { AppStateToolkit } from "../../store/toolkit/store";
import { addTodo, deleteTodo, toggleTodo } from "../../store/toolkit/todoSlice";
// import {
//   addTodo,
//   AppStateAction,
//   deleteTodo,
//   toggleTodo,
// } from "../../store/plain/actions";
// import { AppState } from "../../store/plain/reducers";

export interface ITodoClassProps {
  items: Todo[];
  darkMode: boolean;
  addItem: (item: Todo) => void;
  toggleItem: (id: string) => void;
  deleteItem: (id: string) => void;
}

class TodoClass extends Component<ITodoClassProps> {
  state = { inputText: "" };

  handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputText: evt.target.value });
  };

  handleAddTodo = (evt: React.MouseEvent) => {
    evt.preventDefault();

    this.props.addItem({
      id: uuid(),
      description: this.state.inputText,
      completed: false,
    });

    this.setState({ inputText: "" });
  };

  handleToggle = (id: string) => {
    this.props.toggleItem(id);
  };

  handleDelete = (id: string) => {
    this.props.deleteItem(id);
  };

  render() {
    const todoItems = this.props.items.map((item) => (
      <li key={item.id}>
        <FontAwesomeIcon
          style={{ marginRight: "5px" }}
          icon={item.completed ? faSquareCheck : faSquare}
          onClick={() => this.handleToggle(item.id)}
        />
        <span style={item.completed ? { textDecoration: "line-through" } : {}}>
          {item.description}
        </span>
        <FontAwesomeIcon
          style={{ marginLeft: "10px" }}
          icon={faTrash}
          color={"crimson"}
          onClick={() => this.handleDelete(item.id)}
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
          this.props.darkMode ? { backgroundColor: "black", color: "paleturquoise" } : {}
        }
      >
        <div className="row md-2">
          <div className="col-12">
            <h3>Todo List (Class)</h3>
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
              value={this.state.inputText}
              onChange={this.handleChange}
            />
            <button className="btn btn-danger" onClick={this.handleAddTodo}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const MapStateToProps = (store: AppStateToolkit) => {
  return {
    items: store.todo.todos,
    darkMode: store.theme.darkMode,
  };
};

const MapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    addItem: (item: Todo) => dispatch(addTodo(item)),
    toggleItem: (id: string) => dispatch(toggleTodo(id)),
    deleteItem: (id: string) => dispatch(deleteTodo(id)),
  };
};

export default connect(MapStateToProps, MapDispatchToProps)(TodoClass); //HOC
