import { UseCaseSingleParam, UseCaseWithoutParams } from "../use-cases.types";
import { SetItemParams } from "./local-storage.models";
import { LocalStorageRepository } from "./local-storage.repository";

export type IsSupportedUseCase = UseCaseWithoutParams<boolean>;

export const isSupportedUseCase = (
  localStorageRepository: LocalStorageRepository
): IsSupportedUseCase => ({
  execute: () => localStorageRepository.isSupported(),
});

export type SetItemUseCase = UseCaseSingleParam<SetItemParams, void>;

export const setItemUseCase = (
  localStorageRepository: LocalStorageRepository
): SetItemUseCase => ({
  execute: (params) => {
    if (!localStorageRepository.isSupported()) {
      return;
    }

    localStorageRepository.setItem(params.key, params.value);
  },
});

export type GetItemUseCase = UseCaseSingleParam<string, string | null>;

export const getItemUseCase = (
  localStorageRepository: LocalStorageRepository
): GetItemUseCase => ({
  execute: (key) => {
    if (!localStorageRepository.isSupported()) {
      return null;
    }

    return localStorageRepository.getItem(key);
  },
});

export type RemoveItemUseCase = UseCaseSingleParam<string, void>;

export const removeItemUseCase = (
  localStorageRepository: LocalStorageRepository
): RemoveItemUseCase => ({
  execute: (key) => {
    if (!localStorageRepository.isSupported()) {
      return;
    }

    localStorageRepository.removeItem(key);
  },
});
