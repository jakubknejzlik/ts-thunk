export declare type ThunkFunction<T> = (() => T);
export declare type Thunk<T> = T | ThunkFunction<T>;
export declare function isThunkFunction<T>(thunk: Thunk<T>): thunk is ThunkFunction<T>;
export declare function resolveThunk<T>(thunk: Thunk<T>): T;
