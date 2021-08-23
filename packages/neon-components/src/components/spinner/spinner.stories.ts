import { html, TemplateResult } from 'lit-html';
import './spinner';
import { SpinnerProps } from './spinner';
import { Story } from '@storybook/web-components';

export default {
    title: 'NeonSpinner',
    component: 'neon-spinner',
    argTypes: {
        value: { control: 'number' },
    },
};


// interface ArgTypes extends SpinnerProps {
//     slot?: TemplateResult;
// }


export const Primary: Story<SpinnerProps> = ({
    value = 5,
    }: SpinnerProps) => html`
    <neon-spinner
        .value=${value}
    >
    </neon-spinner>
`;

// export const Primary = Template.bind({});
