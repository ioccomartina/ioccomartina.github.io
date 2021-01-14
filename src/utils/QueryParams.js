export function parseQueryParams(params) {
  return new URLSearchParams(params)
}

export function getParam(params, name) {
  return params.get(name)
}
