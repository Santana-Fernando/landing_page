import { screen } from '@testing-library/react';
import { SectionBackground } from '.';
import { renderTheme } from '../../styles/renderTheme';

describe('<SectionBackground />', () => {
    it('should render whith background dark', () => {
        const {container} = renderTheme(
            <SectionBackground background={true}>
                <h1>Children</h1>
            </SectionBackground>
        )
        expect(screen.getByRole('heading')).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    })

    it('should render whith background light', () => {
        const {container} = renderTheme(
            <SectionBackground>
                <h1>Children</h1>
            </SectionBackground>
        )
        expect(screen.getByRole('heading')).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    })
})
