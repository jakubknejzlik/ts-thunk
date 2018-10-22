export type ThunkFunction<T, U> = ((U) => T);
export type Thunk<T, U = undefined> = T | ThunkFunction<T, U>;

export function isThunkFunction<T, U>(
  thunk: Thunk<T, U>
): thunk is ThunkFunction<T, U> {
  return typeof thunk === 'function';
}

export function resolveThunk<T, U>(thunk: Thunk<T, U>, arg?: U): T {
  return isThunkFunction(thunk) ? thunk(arg) : thunk;
}
