import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'

import { getSpotifyAccessToken } from '../api.ts'

const ProcessLogin = () => {
  const [accessToken, setAccessToken] = useState()
  let [searchParams] = useSearchParams()

  useEffect(() => {
    const code = new URLSearchParams(searchParams).get('code')

    if (code && !accessToken) {
      getSpotifyAccessToken(code).then((token) => {
        setAccessToken(token)
      })
    }
  }, [searchParams, accessToken])

  return <></>
}

export default ProcessLogin
