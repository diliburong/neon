import { html, TemplateResult } from 'lit-html';
import './progress-spinner';
import { ProgressProps } from './progress-spinner';
import { Story } from '@storybook/web-components';

export default {
    title: 'NeonSpinner',
    component: 'neon-spinner',
    argTypes: {
        value: { control: 'number' },
    },
};

export const Primary: Story<ProgressProps> = ({
    value = 5,
    }: ProgressProps) => html`
    <neon-spinner
        .value=${value}
    >
    </neon-spinner>
`;
