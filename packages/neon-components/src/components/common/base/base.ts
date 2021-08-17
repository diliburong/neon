import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { baseStyles } from './base.css';

export class Base extends LitElement {
    static styles = [baseStyles];

    @property({ type: String }) timingId?: string;
}
