import { html, TemplateResult } from 'lit-html';
import './icon';
import { IconProps } from './icon';
import { Story } from '@storybook/web-components';

export default {
    title: 'NeonIcon',
    component: 'neon-icon',
    argTypes: {
        text: {
            name: 'text',
            defaultValue: 'face',
            control: 'text',
            description: 'demo',
            type: { name: 'string', required: false }
        },
        size: {
            options: ['18', '24', '36', '48'],
            control: {
                type: 'select',
            },
        },
    },
};

interface ArgTypes extends IconProps {
    slot?: TemplateResult;
}

export const Template: Story<ArgTypes> = ({
    text = 'face',
    size = 24
    }: ArgTypes) => html`
    <neon-icon
        .text=${text}
        size=${size}
    ></neon-icon>
`;

export const Primary = Template.bind({});

Primary.args  = {
    text: 'warning'
};
