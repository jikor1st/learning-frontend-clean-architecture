import { TodoItem } from "@/domain/todo/todo.models";

export type TodoApi = {
  createTodoItem: (todoItem: TodoItem) => void;
  removeTodoItem: (id: string) => void;
  updateCompleteStatusToTodoItem: (id: string, completed: boolean) => void;
};
