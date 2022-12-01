import axios from "axios";
import Todo from "../models/Todo";

export default class TodoDataService {
  constructor(public apiURL: string) {}

  fetchAllTodos = async (): Promise<Todo[]> => {
    try {
      const result = await axios.get(this.apiURL);

      if (result.status === 200) return result.data;

      return [];
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  getTodoById = async (id: string): Promise<Todo | null> => {
    try {
      if (!id) return null;

      const result = await axios.get(`${this.apiURL}/${id}`);

      if (result.status === 200) return result.data;

      return null;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  addTodo = async (newTodo: Todo): Promise<boolean> => {
    try {
      if (!newTodo) return false;

      const result = await axios.post(this.apiURL, newTodo);
      
      if (result.status === 201) return true;

      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  updateTodo = async (updatedTodo: Todo): Promise<boolean> => {
    try {
      if (!updatedTodo) return false;

      const result = await axios.put(
        `${this.apiURL}/${updatedTodo.id}`,
        updatedTodo
      );

      if (result.status === 200) return true;

      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  deleteTodoById = async (id: string): Promise<boolean> => {
    try {
      if (!id) return false;

      const result = await axios.delete(
        `${this.apiURL}/${id}`
      );

      if (result.status === 200) return true;

      return false;
    } catch (err) {
      console.log(err);
      return false;
    }
  };
}
