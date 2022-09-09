import { SectionBackground } from '.';
import { SectionContainer } from '../SectionContainer/index'

export default {
    title: 'SectionBackground',
    component: SectionBackground,
    args: {
        children: (
            <div>
                <h1>SectionBackground</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Tempora fugit ex nobis quasi. 
                    Eius, molestias quaerat! Hic necessitatibus possimus quaerat
                    impedit molestiae quisquam reprehenderit doloremque? 
                    Dolor asperiores labore cupiditate repellendus.
                </p>
            </div>
        )
    },
    argTypes: {
        children: { type: '' },
    },
};

export const Template = (args) => {
    return (
        <div>
            <SectionBackground {...args} />
        </div>
    )
}
