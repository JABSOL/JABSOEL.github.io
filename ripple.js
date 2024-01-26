[effect=ripple] {
    cursor: pointer;
    overflow: hidden;
    position: relative;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
[effect=ripple]:before {
    content: "";
    display: block;
    border-radius: 50%;
    position: absolute;
    pointer-events: none;
    transform-origin: center;
    top: calc(var(--y) * 1px);
    left: calc(var(--x) * 1px);
    width: calc(var(--d) * 1px);
    height: calc(var(--d) * 1px);
    background: var(--ripple-background, white);
    transform: translate(-50%, -50%) scale(var(--s, 1));
    opacity: calc(var(--o, 1) * var(--ripple-opacity, 0.3));
    transition: calc(var(--t, 0) * var(--ripple-duration, 600ms)) var(--ripple-easing, linear);
}
