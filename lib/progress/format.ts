const slashedProtocols = /https?|ftp|gopher|file/

export const stringifyUrlQueryParam = (param: unknown): string => {
  if (
    typeof param === 'string' ||
    (typeof param === 'number' && !isNaN(param)) ||
    typeof param === 'boolean'
  ) {
    return String(param)
  } else {
    return ''
  }
}

export const urlQueryToSearchParams = (
  urlQuery: Record<string, string | number | boolean | Array<string | number | boolean>>
): URLSearchParams => {
  const result = new URLSearchParams()

  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => result.append(key, stringifyUrlQueryParam(item)))
    } else {
      result.set(key, stringifyUrlQueryParam(value))
    }
  })

  return result
}

export const formatUrl = (urlObj: {
  auth?: string
  hostname?: string
  protocol?: string
  pathname?: string
  hash?: string
  query?: Record<string, string | number | boolean | Array<string | number | boolean>>
  host?: string
  port?: string
  slashes?: boolean
  search?: string
}) => {
  let { auth, hostname } = urlObj
  let protocol = urlObj.protocol || ''
  let pathname = urlObj.pathname || ''
  let hash = urlObj.hash || ''
  let query = urlObj.query || ''
  let host: string | false = false

  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : ''

  if (urlObj.host) {
    host = auth + urlObj.host
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname)
    if (urlObj.port) {
      host += ':' + urlObj.port
    }
  }

  if (query && typeof query === 'object') {
    query = String(urlQueryToSearchParams(query))
  }

  let search = urlObj.search || (query && `?${query}`) || ''

  if (protocol && !protocol.endsWith(':')) protocol += ':'

  if (urlObj.slashes || ((!protocol || slashedProtocols.test(protocol)) && host !== false)) {
    host = '//' + (host || '')
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname
  } else if (!host) {
    host = ''
  }

  if (hash && hash[0] !== '#') hash = '#' + hash
  if (search && search[0] !== '?') search = '?' + search

  pathname = pathname.replace(/[?#]/g, encodeURIComponent)
  search = search.replace('#', '%23')

  return `${protocol}${host}${pathname}${search}${hash}`
}
