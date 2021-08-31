import { html, TemplateResult } from 'lit-html';
import './button';
import { ButtonProps } from './button';
import { Story, Meta } from '@storybook/web-components';
import { classMap } from 'lit-html/directives/class-map';
import { ifDefined } from 'lit/directives/if-defined.js';
import { action } from '@storybook/addon-actions';

export default {
    title: 'NeonButton',
    component: 'neon-button',
    argTypes: {
        title: { control: 'text' },
        textColor: { control: 'color' },
        onClick: { },
    },
} as Meta;

// 函数类型
// interface Story<T> {
//     (args: T): TemplateResult;
//     args?: Partial<T>;
//     argTypes?: Record<string, unknown>;
// }

interface ArgTypes extends ButtonProps {
    slot: TemplateResult;
}

export const Template: Story<ArgTypes> = ({
    title = 'Hello world',
    textColor,
    slot,
    disabled = false,
    }: Partial<ArgTypes>) => {
        const classes = {
            foo: true,
        };
        return     html`
        <neon-button
            class=${classMap(classes)}
            ?disabled=${disabled}
            .title=${title}
        >
            <neon-icon
            text="face"
            size="16"
            slot="start-icon">
            </neon-icon>

        </neon-button>
    `;
    }

;

export const Primary: Story<ArgTypes>  = Template.bind({});

Primary.args  = {
    title: 'custom'
};

export const CustomTitle: Story<ArgTypes> = Template.bind({});
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

export const Action = Template.bind({});
Action.argTypes = {
    onClick: { action: 'onClick' },
};
