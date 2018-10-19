export type ThunkFunction<T> = (() => T);
export type Thunk<T> = T | ThunkFunction<T>;

export function isThunkFunction<T>(thunk: Thunk<T>): thunk is ThunkFunction<T> {
  return typeof thunk === 'function';
}

export function resolveThunk<T>(thunk: Thunk<T>): T {
  return isThunkFunction(thunk) ? thunk() : thunk;
}
