import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';
import Home from './index';

test('renders learn react link', () => {
  const {debug} = renderTheme(<Home/>)
  const headingContainer = screen.getByRole('heading', {name: 'ola'}).parentElement

  expect(headingContainer).toHaveStyle({
    background: 'red'
  })
  expect(headingContainer).toHaveStyleRule('background', 'red')
});