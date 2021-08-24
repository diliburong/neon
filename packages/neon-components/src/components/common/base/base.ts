import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { baseStyles } from './base.css';
import { LogMixin } from '../../../mixins';

export abstract class Base extends LogMixin(LitElement) {
    static styles = [baseStyles];

    @property({ type: String }) timingId?: string;
}
