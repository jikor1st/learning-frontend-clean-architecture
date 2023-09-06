import { TodoItem } from "@/domain/todo/todo.models";

export const createInitialTodoItem = (content: string): TodoItem => ({
  id: "#", // generateId()
  completed: false,
  content,
});
