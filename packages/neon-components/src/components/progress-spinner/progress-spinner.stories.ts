import { html } from 'lit-html';
import './progress-spinner';
import { ProgressProps } from './progress-spinner';
import { Story } from '@storybook/web-components';

export default {
    title: 'NeonSpinner',
    component: 'neon-progress-spinner',
    argTypes: {
        value: { control: 'number' },
    },
};

export const Primary: Story<ProgressProps> = ({
    value = 5,
    }: ProgressProps) => html`
    <neon-progress-spinner
        .value=${value}
    >
    </neon-progress-spinner>
`;
