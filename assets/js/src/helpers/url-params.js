import {parse, stringify} from "qs"

export function stringifyFilters(filters, partial, mapper = (x => x), options = {}) {
    let effectiveFilters = partial
        ? {
            ...filters,
            ...partial
        }
        : filters

    const mappedFilters = mapper(effectiveFilters)

    Object.keys(mappedFilters)
        .forEach(key => {
            if (!mappedFilters[key])
                delete mappedFilters[key]
        })

    return stringify(mappedFilters, {arrayFormat: "comma", encode: false, ...options})
}

export function parseQuerystringFilters(querystring, parser = (x => x)) {
    if (!querystring)
        return parser({})

    const qsParsed = parse(querystring, {comma: true, ignoreQueryPrefix: true})

    return parser(qsParsed)
}


