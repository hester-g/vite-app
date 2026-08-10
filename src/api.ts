import axios, { AxiosHeaders } from 'axios'
import cryptoRandomString from 'crypto-random-string'

import type { TokenRequestDataType } from './types.ts'

const TOKEN_URL = 'https://accounts.spotify.com/api/token'
const ALBUM_RELEASES_URL = 'https://api.spotify.com/v1/browse/new-releases'

const requestToken = (tokenRequestData: TokenRequestDataType) => {
  let headers = new AxiosHeaders()
  headers.set('Content-Type', 'application/x-www-form-urlencoded')

  if ('authorizationHeader' in tokenRequestData) {
    headers.set(
      'Authorization',
      'Basic ' + tokenRequestData.authorizationHeader,
    )
  }

  return axios.post(TOKEN_URL, tokenRequestData.postData, {
    headers: headers,
  })
}

export const getNewAlbums = async () => {
  const accessToken = (
    await requestToken({
      postData: {
        grant_type: 'client_credentials',
        client_id: import.meta.env.VITE_CLIENT_ID,
        client_secret: import.meta.env.VITE_CLIENT_SECRET,
      },
    })
  ).data.access_token

  return axios.get(ALBUM_RELEASES_URL, {
    headers: { Authorization: 'Bearer ' + accessToken },
  })
}

export const loginUser = async () => {
  const state = cryptoRandomString({ length: 16, type: 'base64' })
  const scopes = 'user-top-read user-read-private user-read-email'

  const querystring = {
    response_type: 'code',
    client_id: import.meta.env.VITE_CLIENT_ID,
    scope: scopes,
    redirect_uri: import.meta.env.VITE_REDIRECT_URI,
    state: state,
    show_dialog: 'true', //TODO remove
  }

  window.location.href =
    'https://accounts.spotify.com/authorize?' +
    new URLSearchParams(querystring).toString()
}

export const getTop = async (type: string, timeframe: string, code: string) => {
  const accessToken = (
    await requestToken({
      postData: {
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: import.meta.env.VITE_REDIRECT_URI,
      },
      authorizationHeader: btoa(
        import.meta.env.VITE_CLIENT_ID +
          ':' +
          import.meta.env.VITE_CLIENT_SECRET,
      ),
    })
  ).data.access_token

  return axios
    .get(
      'https://api.spotify.com/v1/me/top/' +
        type +
        '?time_range=' +
        timeframe +
        '&limit=50',
      {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      },
    )
    .catch((response) => console.error(response))
}
