import { getLocalStorageApi } from "@/api/local-storage/local-storage.api";
import { getTodoApi } from "@/api/todo/todo.api";
import {
  createTodoItemUseCase,
  removeTodoItemUseCase,
  updateCompleteStatusToTodoItemUseCase,
} from "@/domain/todo/todo.use-cases";
import { getTodoRepository } from "@/repository/todo/todo.repository";

const localStorageApi = getLocalStorageApi();
const todoApi = getTodoApi(localStorageApi);
const todoRepository = getTodoRepository(todoApi);

export const todoModule = {
  createTodoItem: createTodoItemUseCase(todoRepository).execute,
  removeTodoItem: removeTodoItemUseCase(todoRepository).execute,
  updateCompleteStatusToTodoItem:
    updateCompleteStatusToTodoItemUseCase(todoRepository).execute,
};
