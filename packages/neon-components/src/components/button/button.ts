import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Base } from '../common/base';

export interface ButtonProps {
    title?: string;
    textColor?: string;
    labelColor?: ButtonLabelColor
}

type ButtonLabelColor = 'light' | 'dark';

/**
 * This neon button
 */
@customElement('neon-button')
export class NeonButton extends Base {
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

    @property({ reflect: true })
    labelColor?: ButtonLabelColor;

    /**
     * The button title
     */
    @property({ type: String })
    title = 'Somebody';

    @property()
    textColor = 'blue';

    /**
     * @render
     */
    render() {
        return html`
            <p>
                Hello, ${this.title}
                <slot></slot>
            </p>`;
    }
}

// get typings
declare global {
    interface HTMLElementTagNameMap {
        'neon-button': NeonButton;
    }
}
