export declare type ThunkFunction<T, U> = ((U: any) => T);
export declare type Thunk<T, U = undefined> = T | ThunkFunction<T, U>;
export declare function isThunkFunction<T, U>(thunk: Thunk<T, U>): thunk is ThunkFunction<T, U>;
export declare function resolveThunk<T, U>(thunk: Thunk<T, U>, arg?: U): T;
