import { useEffect } from "react";

export function useTimeout(callback, duration, ...args) {
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
        const timeoutId = setTimeout(callback, duration, ...args);
        return () => clearTimeout(timeoutId);
    }, [callback, duration, args, ...dependencies])
}