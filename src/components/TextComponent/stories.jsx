import P from 'prop-types'
import { TextComponent } from '.';

export default {
    title: 'TextComponent',
    component: TextComponent,
    args: {
        children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quidem consequuntur aliquam voluptatem aut possimus aliquid placeat
        consequatur itaque aperiam quo repudiandae laboriosam, 
        nobis alias enim dolorem ad? Suscipit, recusandae labore!`
    },
    argTypes: {
        children: { type: 'string' },
    },
};

export const Template = (args) => {
    return (
        <div>
            <TextComponent {...args} />
        </div>
    )
}
