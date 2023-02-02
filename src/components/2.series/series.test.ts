import '@testing-library/jest-dom';
import { Series } from './series';

describe('Given Header component', () => {
  test('It should be instace', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new Series('slot');
    expect(element).toBeInstanceOf(Series);
  });
});
