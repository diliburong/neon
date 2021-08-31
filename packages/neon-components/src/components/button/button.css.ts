import { css } from 'lit';

const buttonBaseStyle = css`
    :host {
        background-color: rgb(51, 75, 142);
        border-radius: 4px;
        color: #fff;
        display: inline-flex;
        height: 40px;
        outline: none;
    }

    .btn-base {
        align-items: center;
        background-color: transparent;
        border: none;
        box-sizing: border-box;
        color: inherit;
        cursor: pointer;
        display: inline-flex;
        height: inherit;
        justify-content: center;
        padding-left: 10px;
        padding-right: 10px;
    }
`;

const buttonIconStyle = css`
    .start,
    .end {
        display: flex;
        margin-inline-end: 12px;
    }
`;

export const buttonStyle = css`
    ${buttonBaseStyle}
    ${buttonIconStyle}
`;
