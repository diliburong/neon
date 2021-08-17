import { html, TemplateResult } from 'lit-html';
import './button';
import { ButtonProps } from './button';
import { Story } from '@storybook/web-components';

export default {
    title: 'NeonButton',
    component: 'neon-button',
    argTypes: {
        title: { control: 'text' },
        counter: { control: 'number' },
        textColor: { control: 'color' },
    },
};

// 函数类型
// interface Story<T> {
//     (args: T): TemplateResult;
//     args?: Partial<T>;
//     argTypes?: Record<string, unknown>;
// }

interface ArgTypes extends ButtonProps {
    slot?: TemplateResult;
}

export const Template: Story<ArgTypes> = ({
    title = 'Hello world',
    counter = 5,
    textColor,
    slot,
    }: ArgTypes) => html`
    <neon-button
        style="--neno-element-text-color: ${textColor || 'black'}"
        .title=${title}
        .counter=${counter}
    >
        ${slot}
    </neon-button>
`;

export const Primary = Template.bind({});

Primary.args  = {
    title: 'custom'
};

export const CustomTitle = Template.bind({});
CustomTitle.argTypes = {
    title: { control: 'number' },
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
    slot: html`<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
    slot: { table: { disable: true } },
};
