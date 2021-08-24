import { LitElement } from 'lit';
import { dedupeMixin } from '@open-wc/dedupe-mixin';

/**
 * Class Constructor type
 */
type Constructor<T = {}> = new (...args: any[]) => T; // eslint-disable-line @typescript-eslint/no-explicit-any

export const ProgressMixin = dedupeMixin(
    <T extends Constructor<LitElement>>(superClass: T) => {
        class Progress extends superClass {

            /**
             *
             */
            connectedCallback() {
                super.connectedCallback();
            }

        }

        return Progress as T;
    }
);
