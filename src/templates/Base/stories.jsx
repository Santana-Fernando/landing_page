import { Base } from '.';
import mock, { mockBase } from './mock';
import { GridText } from '../../components/GridText';
import gridMock from '../../components/GridText/mock';

export default {
    title: 'Templates/Base',
    component: Base,
    args: mockBasekBase
};

export const Template = (args) => {
    return (
        <div>
            <Base {...args} />
        </div>
    )
}
