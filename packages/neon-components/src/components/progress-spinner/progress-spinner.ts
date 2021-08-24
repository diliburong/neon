import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Base } from '../common/base';

export interface ProgressProps {
    value: number;
}

@customElement('neon-spinner')
export class NeonProgressSpinner extends Base {
    /**
     * Static styles
     */
    static get styles() {
        return [
            super.styles,
            css`
                p {
                    color: red;
                }
            `
        ];
    }

    @property({ type: Number }) value = 0;

    /**
     * Render
     */
    render() {
        return html`
            <svg focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100">
                <circle
                    id="progress"
                    cx="50%"
                    cy="50%"
                    r="45"
                    fill="transparent"
                ></circle>
            </svg>
        `;
    }
}

// get typings
declare global {
    interface HTMLElementTagNameMap {
        'neon-progress-spinner': NeonProgressSpinner;
    }
}
