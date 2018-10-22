import { resolveThunk, Thunk, isThunkFunction } from './';

describe('ts-thunk', () => {
  it('should resolve thunk value', () => {
    const value = 'john.doe';

    const rawValue: Thunk<string> = value;
    const thunkValue: Thunk<string> = () => value;

    expect(isThunkFunction(rawValue)).toBe(false);
    expect(isThunkFunction(thunkValue)).toBe(true);

    expect(resolveThunk(rawValue)).toBe(value);
    expect(resolveThunk(thunkValue)).toBe(value);
  });
  it('should resolve thunk with arguments', () => {
    const t: Thunk<string, boolean> = (x: string) => `${x}_blah`;

    const resolved = resolveThunk(t, 'xxx');

    expect(resolved).toBe('xxx_blah');
  });
});
