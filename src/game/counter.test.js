import { Counter } from './counter';

describe('Counter', () => {

  const numberOfRows = 3;
  const numberOfColumns = 3;
  const countToWin = 3;

  test('horizontally', () => {
    const array = [
      1, 1, 1,
      0, 0, 0,
      0, 0, 0,
    ]
    const counter = new Counter(array, numberOfRows, numberOfColumns, countToWin);
    expect(counter.whoDidWinHorizontally()).toBe(1);
  });

  test('vertically', () => {
    const array = [
      1, 0, 0,
      1, 0, 0,
      1, 0, 0,
    ]
    const counter = new Counter(array, numberOfRows, numberOfColumns, countToWin);
    expect(counter.whoDidWinVertically()).toBe(1);
  });

  test('forward diagonally', () => {
    const array = [
      1, 0, 0,
      0, 1, 0,
      0, 0, 1,
    ]
    const counter = new Counter(array, numberOfRows, numberOfColumns, countToWin);
    expect(counter.whoDidWinDiagonalForward()).toBe(1);
  });

  test('backward diagonally', () => {
    const array = [
      0, 0, 1,
      0, 1, 0,
      1, 0, 0,
    ]
    const counter = new Counter(array, numberOfRows, numberOfColumns, countToWin);
    expect(counter.whoDidWinDiagonalBackward()).toBe(1);
  });

});