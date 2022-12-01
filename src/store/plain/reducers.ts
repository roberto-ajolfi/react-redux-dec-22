import { combineReducers } from "redux";
import Todo from "../../models/Todo";
import { ActionTypes, AppStateAction } from "./actions";

export interface TodoState {
  todos: Todo[];
}

const initialTodoState: TodoState = {
  todos: [
    { id: "1", description: "Lavare l'auto della moglie", completed: false },
  ],
};

const todoReducer = (
  currentState: TodoState = initialTodoState,
  action: AppStateAction
): TodoState => {
  switch (action.type) {
    case ActionTypes.ADDTODO:
      return {
        ...currentState,
        todos: [...currentState.todos, action.payload],
      };
    case ActionTypes.TOGGLETODO:
      let newTodos = [...currentState.todos];
      let item = newTodos.find((t) => t.id === action.payload);
      if (item) item.completed = !item.completed;
      return {
        ...currentState,
        todos: newTodos,
      };
    case ActionTypes.DELETETODO:
      let todosWithoutDeleted = currentState.todos.filter(
        (t) => t.id !== action.payload
      );
      return {
        ...currentState,
        todos: todosWithoutDeleted,
      };
    default:
      return currentState;
  }
};

export interface ThemeState {
  darkMode: boolean;
}

const initialThemeState: ThemeState = { darkMode: false };

const themeReducer = (
  currentState: ThemeState = initialThemeState,
  action: AppStateAction
) => {
  switch(action.type) {
    case ActionTypes.TOGGLEDARKMODE:
      return {
        ...currentState,
        darkMode: !currentState.darkMode
      };
    default:
      return currentState;
  }
};

export interface AppState {
  todo: TodoState;
  theme: ThemeState;
}

const appReducer = combineReducers({
  todo: todoReducer,
  theme: themeReducer,
});

export default appReducer;
