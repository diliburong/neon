import { html } from 'lit';
import { customElement, property,  } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { Base } from '../common/base';
import { buttonStyle } from './button.css';

export interface ButtonProps {
    title?: string;
    textColor?: string;
    labelColor?: ButtonLabelColor;
    disabled?: boolean;
}

type ButtonLabelColor = 'light' | 'dark';

/**
 * This neon button
 */
@customElement('neon-button')
export class NeonButton extends Base implements ButtonProps {
    /**
     * Static styles
     */
    static get styles() {
        return [
            super.styles,
            buttonStyle
        ];
    }

    /**
     * Disable flag.
     */
    @property({ type: Boolean, reflect: true})
    disabled = false;


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
     * Handle Event Propagation
     *
     * @param   {Event} event click event
     */
    private handleEventPropagation(event: Event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();

            return;
        }
    }

    /**
     * Handle button click event.
     *
     * @param   {Event} event click event.
     */
    private handleClick(event: MouseEvent) {
        if (this.disabled) {
            this.handleEventPropagation(event);

            return;
        }
    }

    /**
     * Life style
     */
    constructor() {
        super();

        this.addEventListener('click', this.handleClick);
    }

    /**
     * @render
     */
    render() {
        const classes = {
            'btn-base': true,
        };

        return html`
            <button
                class=${classMap(classes)}
                ?disabled=${this.disabled}
            >
                <span class="start">
                    <slot name="start-icon"></slot>
                </span>
                <span class="btn-label">
                    ${this.title}
                </span>
                <span class="end">
                    <slot name="end-icon"></slot>
                </span>
            </button>`;
    }
}

// get typings
declare global {
    interface HTMLElementTagNameMap {
        'neon-button': NeonButton;
    }
}
