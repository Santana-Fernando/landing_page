import { screen } from '@testing-library/react';
import { GridTwoColumn } from '.';
import { renderTheme } from '../../styles/renderTheme';
import mock from './mock';

describe('<GridTwoColumn />', () => {
    it('should render two column grid', () => {
        const { container } = renderTheme(<GridTwoColumn {...mock} />);
        expect(container).toMatchSnapshot();
    })
})
