import { useEffect } from 'react'

const isTargetable = thing => {
    if (typeof thing !== 'undefined') {
        return thing instanceof EventTarget
    }

    return false
}

export const useEvent = (target, event, callback, options, dependencies = []) => {

    useEffect(() => {
        if (isTargetable(target)) {
            target.addEventListener(event, callback, options)
            return () => target.removeEventListener(event, callback)
        } else {
            throw new TypeError(`useEvent target should be either a ref of type HTMLElement or an HTMLElement, got type ${target?.constructor?.name || 'undefined'}`)
        }
    }, dependencies)
}