export type Thunk<T> = T | (() => T);

export function resolveThunk<T>(thunk: Thunk<T>): T {
  return typeof thunk === 'function' ? thunk() : thunk;
}