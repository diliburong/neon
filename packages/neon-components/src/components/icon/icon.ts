import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Base } from '../common/base';
import { iconStyle } from './icon.css';

type IconSizeType = 18 | 24 | 36 | 48;

/**
 * Icon
 */
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
            iconStyle
        ];
    }

    /* Icon size */
    @property({ type: Number, reflect: true })
    size: IconSizeType = 24;

    /** Icon type */
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
