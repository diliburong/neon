import { css } from 'lit';

const iconFontFamily = css`
    :host {
        direction: ltr;
        display: inline-block;
        font-family: "Material Icons", sans-serif;
        /* Support for IE. */
        font-feature-settings: "liga";
        font-size: 24px;

        /* Support for all WebKit browsers. */
        -webkit-font-smoothing: antialiased;
        /* Support for Firefox. */
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        font-weight: normal;
        letter-spacing: normal;
        line-height: 1;
        /* Support for Safari and Chrome. */
        text-rendering: optimizeLegibility;
        text-transform: none;
        white-space: nowrap;
        word-wrap: normal;
    }

    :host([size="18"]) {
        font-size: 18px;
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
`;

export const iconStyle = css`
    ${iconFontFamily}
`;
