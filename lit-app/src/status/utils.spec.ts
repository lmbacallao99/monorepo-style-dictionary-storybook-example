import { getColor } from './utils';

describe('ABP Status getColor function', () => {
  test('color be gray status be default', () => {
    expect(getColor('default').color).toBe('gray');
    expect(getColor('default').status).toBe('default');
  });
  test('color be green status be succes', () => {
    expect(getColor('success').color).toBe('green');
    expect(getColor('success').status).toBe('success');
  });
  test('color be blue status be info', () => {
    expect(getColor('info').color).toBe('blue');
    expect(getColor('info').status).toBe('info');
  });
  test('color be red status be warning', () => {
    expect(getColor('warning').color).toBe('red');
    expect(getColor('warning').status).toBe('warning');
  });
  test('color and status be default', () => {
    expect(getColor('hello').color).toBe('gray');
    expect(getColor('hello').status).toBe('default');
    expect(getColor('10').color).toBe('gray');
    expect(getColor('10').status).toBe('default');
    expect(getColor('-10').color).toBe('gray');
    expect(getColor('-10').status).toBe('default');
  });
});
