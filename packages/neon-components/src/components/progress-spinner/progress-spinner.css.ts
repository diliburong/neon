import { css } from 'lit';

const progressBaseStyles = css`
    :host {
        --progress-r: 20px;
        --progress-stroke-width: 8px;
        --progress-spinner-background-color: var(--neon-neutral-color-800);
        --progress-spinner-color: var(--neon-primary-color);

        display: inline-block;
        height: var(--progress-spinner-size, 48px);
        width: var(--progress-spinner-size, 48px);
    }

    .background {
        stroke: var(--progress-spinner-background-color);
    }

    .spinner {
        stroke: var(--progress-spinner-color);
        stroke-linecap: round;
        stroke-width: var(--progress-stroke-width);
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
    }

    .spinner-animation {
        animation: dash 2s linear 0s infinite normal none running;
    }
`;

const progressAnimation = css`
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
