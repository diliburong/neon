import {html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Base } from '../common/base';

export interface ButtonProps {
    title?: string;
    textColor?: string;
    labelColor?: ButtonLabelColor
}

type ButtonLabelColor = 'light' | 'dark';

@customElement('neon-button')
export class NeonButton extends Base {
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

    @property({ reflect: true }) labelColor?: ButtonLabelColor;

    @property()
    title = 'Somebody';

    @property()
    textColor = 'blue';

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

