import Todo from "../../models/Todo";

export enum ActionTypes {
  ADDTODO = "AddTodo",
  TOGGLETODO = "ToggleTodo",
  DELETETODO = "DeleteTodo"
}

// ACTIONS

export interface AddTodo {
  type: ActionTypes.ADDTODO;
  payload: Todo;  // => il nuovo oggetto Todo
}

export interface ToggleTodo {
  type: ActionTypes.TOGGLETODO;
  payload: string;  // => l'ID dell'oggetto Todo
}

export interface DeleteTodo {
  type: ActionTypes.DELETETODO;
  payload: string;  // => l'ID dell'oggetto Todo
}

// Type Merging - serve per i reducer
export type AppStateAction = AddTodo | ToggleTodo | DeleteTodo;

// ACTION BUILDERS

export const addTodo = (item: Todo): AddTodo => { return { type: ActionTypes.ADDTODO, payload: item} };

export const toggleTodo = (id: string): ToggleTodo => { return { type: ActionTypes.TOGGLETODO, payload: id} };

export const deleteTodo = (id: string): DeleteTodo => { return { type: ActionTypes.DELETETODO, payload: id} };