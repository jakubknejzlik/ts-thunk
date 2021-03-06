export declare type ThunkFunction<T, U> = (arg: U) => T;
export declare type Thunk<T, U = undefined> = T | ThunkFunction<T, U>;
export declare type ThunkAsyncFunction<T, U> = (arg: U) => Promise<T>;
export declare type ThunkAsync<T, U = undefined> = T | ThunkAsyncFunction<T, U>;
export declare function isThunkFunction<T, U>(thunk: Thunk<T, U>): thunk is ThunkFunction<T, U>;
export declare function resolveThunk<T, U>(thunk: Thunk<T, U>, arg?: U): Promise<T> | T;
export declare function resolveOptionalThunk<T, U>(thunk?: Thunk<T, U>, arg?: U): Promise<T> | T | undefined;
export declare function resolveThunkAsync<T, U>(thunk: Thunk<T, U>, arg?: U): Promise<T>;
export declare function resolveOptionalThunkAsync<T, U>(thunk?: Thunk<T, U>, arg?: U): Promise<T | undefined>;
