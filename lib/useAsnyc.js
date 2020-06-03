import { useEffect } from "react";


//thank you to @trezycodes for the implementation/idea
export const useAsync = (func, dependencies) => {
    useEffect(() => {
        func();

        return () => { };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}