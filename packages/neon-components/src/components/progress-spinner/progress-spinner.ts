import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
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

    @property({ type: Number }) value?: number;

    /**
     * Render
     */
    render() {
        const animate = this.value === undefined;
        const perimeter = Math.PI * 2 * 20;
        const clampedProgressValue = Math.max(Math.min(this.value || 0, 100), 0);
        const progressPercent = clampedProgressValue / 100;

        const indicatorClasses = {
            spinner: true,
            'spinner-animation': animate
        };

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
                    class=${classMap(indicatorClasses)}
                    fill="transparent"
                    cx="24px"
                    cy="24px"
                    r="20px"
                    stroke-dasharray=${animate ? undefined : perimeter}
                    stroke-dashoffset=${animate ? undefined : perimeter - perimeter * progressPercent}
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
