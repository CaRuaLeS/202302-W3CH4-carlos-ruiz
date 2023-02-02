import '@testing-library/jest-dom';
import { SeriesWatched } from './series-watched';

describe('Given Header component', () => {
  test('It should be instace', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new SeriesWatched('slot');
    expect(element).toBeInstanceOf(SeriesWatched);
  });
});
