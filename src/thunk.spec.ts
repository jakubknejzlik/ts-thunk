import { resolveThunk, Thunk } from './thunk';

describe('ts-thunk', () => {
  it('should resolve thunk value', () => {
    const value = 'john.doe';

    const rawValue: Thunk<string> = value;
    const thunkValue: Thunk<string> = () => value;

    expect(resolveThunk(rawValue)).toBe(value);
    expect(resolveThunk(thunkValue)).toBe(value);
  });
});
