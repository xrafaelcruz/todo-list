import { useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Request = (...params: any) => Promise<any>

export const useApi = <T>(request: Request) => {
  const [loading, setLoading] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wrapper = async (...params: any) => {
    setLoading(true)
    const result = await request(...params)
    setLoading(false)

    return result
  }

  return { request: wrapper as unknown as T, loading }
}

const api = <T>(
  url: string,
  params: globalThis.RequestInit | undefined
): Promise<T> =>
  fetch(url, params)
    .then((res) => res.statusText !== 'No Content' && res.json())
    .then((res: T) => res)

export default api
