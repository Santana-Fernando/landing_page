import { SectionContainer } from '.';

export default {
    title: 'SectionContainer',
    component: SectionContainer,
    args: {
        children: (
            <div>
                <h1>SectionContainer</h1>
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
            <SectionContainer {...args} />
        </div>
    )
}
