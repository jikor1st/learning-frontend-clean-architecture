import { TodoItem } from "./todo.models";

export type TodoRepository = {
  createTodoItem: (content: string) => TodoItem;
  removeTodoItem: (id: string) => void;
  updateCompleteStatusToTodoItem: (id: string, completed: boolean) => void;
};
