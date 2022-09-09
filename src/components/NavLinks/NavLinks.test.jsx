import { screen } from '@testing-library/react';
import { NavLinks } from '.';
import { renderTheme } from '../../styles/renderTheme';
import { theme } from '../../styles/theme';
import Mock from './mock';

describe('<NavLinks />', () => {
    it('should render links', () => {
        renderTheme(<NavLinks links={Mock} />)
        expect(screen.getAllByRole('link')).toHaveLength(Mock.length);
    })

    it('should not render links', () => {
        renderTheme(<NavLinks />)
        expect(screen.queryAllByText(/link/i)).toHaveLength(0);
    })

    it('should render links responsive', () => {
        renderTheme(<NavLinks links={Mock} />)
        expect(screen.getByText(/link 10/i).parentElement).
        toHaveStyleRule(
            'flex-flow', 
            'column wrap', 
            {
                media: theme.media.lteMedium
            }
        );
    })

    it('should match snapshot', () => { 
        const { container } = renderTheme(<NavLinks links={Mock}/>) 
        expect(container.firstChild).toMatchSnapshot(); 
    })
})
