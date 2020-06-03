import { useEffect } from "react";

export function useInterval(callback, duration, ...args) {
    let dependencies = null;
    if (typeof callback === "object") {
        args = callback.args;
        duration = callback.duration;
        callback = callback.callback;
        dependencies = callback.dependencies;
    } else {
        dependencies = args.pop();
    }
    useEffect(() => {
        const timeoutId = setInterval(callback, duration, ...args);
        return () => clearInterval(timeoutId);
    }, [callback, duration, args, ...dependencies])
}