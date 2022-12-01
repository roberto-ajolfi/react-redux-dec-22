import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Todo from "../../models/Todo";
import TodoDataService from "../../services/TodoDataService";

export interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [
    { id: "1", description: "Lavare l'auto della moglie con il Toolkit", completed: false },
  ],
};

export const addTodoAsync = createAsyncThunk(
  'todos/addTodo',
  async (newTodo: Todo, { rejectWithValue }) => {
    const svc = new TodoDataService("http://localhost:3001/todos");

    const response = await svc.addTodo(newTodo);

    if(response) {
      return newTodo;
    } else {
      rejectWithValue("Cannot save Todo");
    }
  }
);

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // action definition + reducer implementation
    addTodo: (state, action: PayloadAction<Todo>) => {
      if(action.payload)
        state.todos.push(action.payload); // change directly the state, no clone!
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      let item = state.todos.find((t) => t.id === action.payload);
      if (item) 
        item.completed = !item.completed;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(
        (t) => t.id !== action.payload
      );
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTodoAsync.pending, (state) => {
        // loading spinner ? message ? niente ?
      })
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        // update Redux State
        if(action.payload)
          state.todos.push(action.payload);
      })
      .addCase(addTodoAsync.rejected, (state, action) => {
        // error condition: update Redux state???
      })
  }
});

// export degli Action Builder
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

// export del reducer (per configurare lo store)
export default todoSlice.reducer;