import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Base } from '../common/base';


type IconSizeType = 18 | 24 | 36 | 48;

export interface IconProps {
    size: IconSizeType;
    text?: string;
}

@customElement('neon-icon')
export class NeonIcon extends Base {
    /**
     * Static styles
     */
    static get styles() {
        return [
            super.styles,
            css`
                :host{
                    font-family: 'Material Icons';
                    font-weight: normal;
                    font-style: normal;
                    font-size: 24px;
                    line-height: 1;
                    letter-spacing: normal;
                    text-transform: none;
                    display: inline-block;
                    white-space: nowrap;
                    word-wrap: normal;
                    direction: ltr;

                    /* Support for IE. */
                    font-feature-settings: 'liga';

                    /* Support for all WebKit browsers. */
                    -webkit-font-smoothing: antialiased;

                    /* Support for Safari and Chrome. */
                    text-rendering: optimizeLegibility;

                    /* Support for Firefox. */
                    -moz-osx-font-smoothing: grayscale;
                }

                :host([size="18"]) {
                    font-size: 18px
                }

                :host([size="24"]) {
                    font-size: 24px;
                }

                :host([size="36"]) {
                    font-size: 36px;
                }

                :host([size="48"]) {
                    font-size: 48px;
                }
            `
        ];
    }

    @property({ reflect: true })
    size: IconSizeType = 24;

    @property({ type: String, reflect: true })
    text = '';

    /**
     * Render
     */
    render() {
        return html`${this.text}`;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'neon-icon': NeonIcon;
    }
}
