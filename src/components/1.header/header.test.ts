import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given Header component', () => {
  test('It should be instace', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new Header('slot');
    expect(element).toBeInstanceOf(Header);
  });
});
