import { TodoApi } from "./todo.types";

export const getTodoApi = (localStorageApi: any): TodoApi => ({
  createTodoItem: (todoItem) => {
    const todos = localStorageApi.getItem("todos") ?? [];

    localStorageApi.setItem("todos", JSON.stringify([todoItem, ...todos]));
  },
  removeTodoItem: (id) => {
    const todos = localStorage.getItem("todos");

    if (!todos) return void 0;

    localStorageApi.setItem(
      "todos",
      JSON.stringify(todos.filter((todo) => todo.id !== id))
    );
  },
  updateCompleteStatusToTodoItem: (id, completed) => {
    const todos = localStorageApi.getItem("todos");

    if (!todos) return void 0;

    localStorageApi.setItem(
      "todos",
      JSON.stringify(
        todos.map((todo) => {
          if (todo.id !== id) {
            return {
              ...todo,
              completed,
            };
          }

          return todo;
        })
      )
    );
  },
});
