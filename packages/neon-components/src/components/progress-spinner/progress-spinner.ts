import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Base } from '../common/base';
import { progressSpinnerStyle } from './progress-spinner.css';

export interface ProgressProps {
    value: number;
}

@customElement('neon-progress-spinner')
export class NeonProgressSpinner extends Base {
    /**
     * Static styles
     */
    static get styles() {
        return [
            super.styles,
            progressSpinnerStyle
        ];
    }

    @property({ type: Number }) value = 0;

    /**
     * Render
     */
    render() {
        return html`
            <svg focusable="false" class="container" viewBox="0 0 48 48">
                <circle
                    class="background"
                    fill="transparent"
                    cx="24px"
                    cy="24px"
                    r="20px"
                    stroke="#343647"
                    stroke-width="8"
                />
                <circle
                    class="spinner"
                    fill="transparent"
                    cx="24px"
                    cy="24px"
                    r="20px"
                    stroke-dasharray=""
                />
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
