import { getList } from './utils';

describe('ABPCarruselIndicator getList function', () => {
  test('should be expected end > start', () => {
    expect(getList(0, 5)).toStrictEqual([0, 1, 2, 3, 4]);
  });
  test('not should be expected start > end', () => {
    expect(getList(10, 5)).toStrictEqual([0]);
  });
  test('params be a negative number', () => {
    expect(getList(-5, 0)).toStrictEqual([0]);
    expect(getList(0, -5)).toStrictEqual([0]);
    expect(getList(-10, 10)).toStrictEqual([0]);
    expect(getList(-10, -5)).toStrictEqual([0]);
    expect(getList(-5, -10)).toStrictEqual([0]);
  });
  test('not include the end', () => {
    expect(getList(0, 5)).not.toStrictEqual([0, 1, 2, 3, 4, 5]);
  });
});
