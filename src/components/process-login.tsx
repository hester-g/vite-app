import { useEffect } from 'react'
import { useSearchParams } from 'react-router'

import { getSpotifyAccessToken } from '../api'
import { useLogin } from './use-login'

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
