import { css } from 'lit';

const progressBaseStyles = css`
    :host {
        --progress-r: 20px;
        --progress-stroke-width: 8px;
        --progress-spinner-background-color: var(--neon-neutral-color-800);
        --progress-spinner-color: var(--neon-primary-color);
    }

    .container {
        height: 48px;
        width: 48px;
    }

    .background {
        stroke: var(--progress-spinner-background-color);
    }

    .spinner {
        animation: dash 2s linear 0s infinite normal none running;
        stroke: var(--progress-spinner-color);
        stroke-linecap: round;
        stroke-width: var(--progress-stroke-width);
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
    }
`;

const progressAnimation = css`
    @keyframes rotate {
        0% {
            transform: rotate(0);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes dash {
        0% {
            stroke-dasharray: 0.01px, calc(3.14 * 2 * var(--progress-r));
            transform: rotate(0deg);
        }

        50% {
            stroke-dasharray: calc(3.14 * 4 / 3 * var(--progress-r)), calc(3.14 * var(--progress-r));
            transform: rotate(450deg);
        }

        100% {
            stroke-dasharray: 0.01px, calc(3.14 * 2 * var(--progress-r));
            transform: rotate(1080deg);
        }
    }
`;


export const progressSpinnerStyle = css`
    ${progressBaseStyles}
    ${progressAnimation}
`;
