import '@testing-library/jest-dom';
import { SeriesPending } from './series-pending';

describe('Given Header component', () => {
  test('It should be instace', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new SeriesPending('slot');
    expect(element).toBeInstanceOf(SeriesPending);
  });
});
