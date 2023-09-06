import {
  UseCaseMultipleParams,
  UseCaseSingleParam,
} from "@/domain/use-cases.types";
import { TodoItem } from "./todo.models";
import { TodoRepository } from "./todo.repository";

export type CreateTodoItemUseCase = UseCaseSingleParam<string, TodoItem>;

export const createTodoItemUseCase = (
  todoRepository: TodoRepository
): CreateTodoItemUseCase => ({
  execute: (params) => {
    return todoRepository.createTodoItem(params);
  },
});

export type RemoveTodoItemUseCase = UseCaseSingleParam<string, void>;

export const removeTodoItemUseCase = (
  todoRepository: TodoRepository
): RemoveTodoItemUseCase => ({
  execute: (params) => {
    return todoRepository.removeTodoItem(params);
  },
});

export type UpdateCompleteStatusToTodoItemUseCase = UseCaseMultipleParams<
  [string, boolean],
  void
>;

export const updateCompleteStatusToTodoItemUseCase = (
  todoRepository: TodoRepository
): UpdateCompleteStatusToTodoItemUseCase => ({
  execute: (...params) => {
    return todoRepository.updateCompleteStatusToTodoItem(...params);
  },
});
