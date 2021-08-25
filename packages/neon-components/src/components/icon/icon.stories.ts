import { html, TemplateResult } from 'lit-html';
import './icon';
import { IconProps } from './icon';
import { Meta, Story } from '@storybook/web-components';
import { ifDefined } from 'lit/directives/if-defined.js';

export default {
    title: 'NeonIcon',
    component: 'neon-icon',
    argTypes: {
        text: {
            control: 'text',
            type: { name: 'string', required: false }
        },
        size: {
            options: ['18', '24', '36', '48'],
            control: {
                type: 'select',
            },
        },
    },
} as Meta;

interface ArgTypes extends IconProps {
    slot?: TemplateResult;
}

export const Template: Story<ArgTypes> = ({
    text = 'face',
    size = 24
    }: ArgTypes) => html`
    <neon-icon
        text=${text}
        size=${size}
    ></neon-icon>
`;

export const Primary: Story<ArgTypes> = Template.bind({});

Primary.args  = {
    text: 'warning'
};
