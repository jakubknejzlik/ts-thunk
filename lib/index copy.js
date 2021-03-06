"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function isThunkFunction(thunk) {
    return typeof thunk === "function";
}
exports.isThunkFunction = isThunkFunction;
function resolveThunk(thunk, arg) {
    return isThunkFunction(thunk) ? thunk(arg) : thunk;
}
exports.resolveThunk = resolveThunk;
function resolveOptionalThunk(thunk, arg) {
    if (typeof thunk === "undefined") {
        return undefined;
    }
    return resolveThunk(thunk, arg);
}
exports.resolveOptionalThunk = resolveOptionalThunk;
function resolveAsyncThunk(thunk, arg) {
    return __awaiter(this, void 0, void 0, function* () {
        return isThunkFunction(thunk) ? yield thunk(arg) : thunk;
    });
}
exports.resolveAsyncThunk = resolveAsyncThunk;
function resolveOptionalAsyncThunk(thunk, arg) {
    return __awaiter(this, void 0, void 0, function* () {
        if (typeof thunk === "undefined") {
            return undefined;
        }
        return resolveAsyncThunk(thunk, arg);
    });
}
exports.resolveOptionalAsyncThunk = resolveOptionalAsyncThunk;
//# sourceMappingURL=index copy.js.map