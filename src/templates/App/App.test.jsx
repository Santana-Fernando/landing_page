import { renderTheme } from '../../styles/renderTheme';
import Home from './index';

describe('<HOME />', () => {
  it('should render home', () => {
    renderTheme(<Home/>);
  });
});
