import { useEffect } from 'react'
import { useSearchParams } from 'react-router'

import { getSpotifyAccessToken } from '../api.ts'
import { useLogin } from './use-login.tsx'

const ProcessLogin = () => {
  let [searchParams] = useSearchParams()
  const { loginToken, setLoginToken } = useLogin()

  useEffect(() => {
    const code = new URLSearchParams(searchParams).get('code')

    if (code && !loginToken) {
      getSpotifyAccessToken(code).then((token) => {
        setLoginToken(token)
      })
    }
  }, [searchParams, loginToken, setLoginToken])

  return <></>
}

export default ProcessLogin
