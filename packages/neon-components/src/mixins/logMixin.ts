import { LitElement } from 'lit';
import { dedupeMixin } from '@open-wc/dedupe-mixin';

/**
 * Class Constructor type
 */
type Constructor<T = {}> = new (...args: any[]) => T; // eslint-disable-line @typescript-eslint/no-explicit-any

export const LogMixin = dedupeMixin(
    <T extends Constructor<LitElement>>(superClass: T) => {
        class LogClass extends superClass {

            /**
             * Constructor
             */
            constructor(...args: any[]) { // eslint-disable-line @typescript-eslint/no-explicit-any
                super(...args);
                // eslint-disable-next-line no-console
                console.log(`${this.localName} was created`);
            }

            /**
             * Lifecycle callback
             */
            connectedCallback() {
                super.connectedCallback();
                // eslint-disable-next-line no-console
                console.log(`${this.localName} was connectedCallback`);
            }

            /**
             * Lifecycle callback
             */
            disconnectedCallback() {
                super.connectedCallback();
                // eslint-disable-next-line no-console
                console.log(`${this.localName} was disconnectedCallback`);
            }

        }

        return LogClass as T;
    }
);
