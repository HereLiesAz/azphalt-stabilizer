
export function register(runtime) {
    runtime.registerFilter('vegas-stabilize', (canvas, frame, params) => {
        const ctx = canvas.getContext('2d'); ctx.putImageData(frame, 0, 0);
    });
}
