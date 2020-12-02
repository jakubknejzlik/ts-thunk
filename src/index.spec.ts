import {
  Thunk,
  ThunkAsync,
  isThunkFunction,
  resolveThunk,
  resolveThunkAsync,
} from "./";

describe("ts-thunk", () => {
  it("should resolve thunk value", () => {
    const value = "john.doe";

    const rawValue: Thunk<string> = value;
    const thunkValue: Thunk<string> = () => value;

    expect(isThunkFunction(rawValue)).toBe(false);
    expect(isThunkFunction(thunkValue)).toBe(true);

    expect(resolveThunk(rawValue)).toBe(value);
    expect(resolveThunk(thunkValue)).toBe(value);
  });

  it("should resolve thunk with arguments", () => {
    const t: Thunk<string, string> = (x: string) => `${x}_blah`;

    const resolved = resolveThunk(t, "xxx");

    expect(resolved).toBe("xxx_blah");
  });

  it("should resolve undefined thunk", () => {
    const t: Thunk<string, boolean> | undefined = undefined;

    const resolved = resolveThunk(t, false);

    expect(resolved).toBe(undefined);
  });

  it("should resolve thunk async value", async () => {
    const value = "john.doe";

    const rawValue: ThunkAsync<string> = value;
    const thunkValue: ThunkAsync<string> = async () => value;

    expect(isThunkFunction(rawValue)).toBe(false);
    expect(isThunkFunction(thunkValue)).toBe(true);

    expect(await resolveThunkAsync(rawValue)).toBe(value);
    expect(await resolveThunkAsync(thunkValue)).toBe(value);
  });

  it("should resolve thunk async with arguments", async () => {
    const t: ThunkAsync<string, string> = async (x: string) =>
      new Promise((res) => res(`${x}_blah`));

    const resolved = await resolveThunkAsync(t, "xxx");

    expect(resolved).toBe("xxx_blah");
  });
});
