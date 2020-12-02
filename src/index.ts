export type ThunkFunction<T, U> = (arg: U) => T;
export type Thunk<T, U = undefined> = T | ThunkFunction<T, U>;

export type ThunkAsyncFunction<T, U> = (arg: U) => Promise<T>;
export type ThunkAsync<T, U = undefined> = T | ThunkAsyncFunction<T, U>;

export function isThunkFunction<T, U>(
  thunk: Thunk<T, U>
): thunk is ThunkFunction<T, U> {
  return typeof thunk === "function";
}

export function resolveThunk<T, U>(
  thunk: Thunk<T, U>,
  arg?: U
): Promise<T> | T {
  return isThunkFunction(thunk) ? thunk(arg) : thunk;
}
export function resolveOptionalThunk<T, U>(
  thunk?: Thunk<T, U>,
  arg?: U
): Promise<T> | T | undefined {
  if (typeof thunk === "undefined") {
    return undefined;
  }
  return resolveThunk(thunk, arg);
}

export function isThunkAsyncFunction<T, U>(
  thunk: ThunkAsync<T, U>
): thunk is ThunkAsyncFunction<T, U> {
  return typeof thunk === "function";
}

export async function resolveThunkAsync<T, U>(
  thunk: ThunkAsync<T, U>,
  arg?: U
): Promise<T> {
  return isThunkAsyncFunction(thunk) ? await thunk(arg) : thunk;
}
export async function resolveOptionalThunkAsync<T, U>(
  thunk?: ThunkAsync<T, U>,
  arg?: U
): Promise<T | undefined> {
  if (typeof thunk === "undefined") {
    return undefined;
  }
  return resolveThunkAsync(thunk, arg);
}
