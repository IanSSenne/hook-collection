import { useEffect } from "react";

export const useAsync = (func, dependencies) => {
    useEffect(() => {
        func();

        return () => { };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}