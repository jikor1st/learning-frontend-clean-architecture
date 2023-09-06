import { TodoApi } from "@/api/todo/todo.types";
import { TodoRepository } from "@/domain/todo/todo.repository";
import { createInitialTodoItem } from "./operations/create-initial-todo-item";

export const getTodoRepository = (todoApi: TodoApi): TodoRepository => ({
  createTodoItem: (content) => {
    const todoItem = createInitialTodoItem(content);

    todoApi.createTodoItem(todoItem);

    return todoItem;
  },
  removeTodoItem: (id: string) => {
    todoApi.removeTodoItem(id);
  },
  updateCompleteStatusToTodoItem: (id, completed) => {
    todoApi.updateCompleteStatusToTodoItem(id, completed);
  },
});
