const yandex = 'https://ya-praktikum.tech/api/v2'

export const mainFetch = <T>(
  path: string,
  options: RequestInit
): Promise<T> => {
  return fetch(`${yandex}${path}`, {
    ...options,
    credentials: 'include',
  }).then(res => {
    console.log(res)
    if (!res.ok) {
      return Promise.reject(res.status)
    }
    const searhPlain = res.headers.get('content-type')
    if (searhPlain.indexOf('text/plain') != -1) {
      return res.text()
    }
    if (searhPlain && searhPlain.indexOf('application/json') !== -1) {
      return res.json()
    }
    return res
  })
}
