import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<LogoLink />', () => {
    it('should render text logo', () => {
        renderTheme(<LogoLink link="#target" text='Olá mundo' />)
        expect(screen.getByRole('heading', {name: 'Olá mundo'})).toBeInTheDocument();
        expect(screen.getByRole('link', {name: 'Olá mundo'})).toHaveAttribute('href', '#target');
    })

    it('should render image logo', () => {
        renderTheme(<LogoLink link="#target01" text="Olá mundo" srcImg="image.jpg"/>)
        expect(screen.getByAltText('Olá mundo')).toHaveAttribute('src', 'image.jpg');
    })

    it('should render match snapshot', () => {
        const { container } = renderTheme(<LogoLink link="#target01" text="Olá mundo" srcImg="image.jpg"/>)
        expect(container.firstChild).toMatchSnapshot();
    })
})
