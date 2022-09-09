import { NavLinks } from '.';
import Mock from './mock';

export default {
    title: 'NavLinks',
    component: NavLinks,
    args: {
        links: Mock
    },
    argTypes: {
        links: { type: ''}
    }
};

export const Template = (args) => {
    return (
        <div>
            <NavLinks {...args} />
        </div>
    )
}
