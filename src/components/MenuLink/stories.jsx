import { MenuLink } from '.';

export default {
    title: 'MenuLink',
    component: MenuLink,
    args: {
        children: 'Link do menu',
        link: 'https://www.google.com/',
        newTab: true

    },
    argTypes: {
        children: { type: 'string' },
    },
};

export const Template = (args) => {
    return (
        <div style={{ display: 'flex' }}>
            <MenuLink {...args} />
        </div>
    )
}
