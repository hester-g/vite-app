import axios from 'axios'

const TOKEN_URL = 'https://accounts.spotify.com/api/token'
const ALBUM_RELEASES_URL = 'https://api.spotify.com/v1/browse/new-releases'

const requestToken = () => {
  const postData = {
    grant_type: 'client_credentials',
    client_id: import.meta.env.VITE_CLIENT_ID,
    client_secret: import.meta.env.VITE_CLIENT_SECRET,
  }

  return axios.post(TOKEN_URL, postData, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  })
}

/*
curl --request GET \
--url https://api.spotify.com/v1/browse/new-releases \
--header 'Authorization: Bearer 1POdFZRZbvb...qqillRxMr2z'
 */

export const getNewAlbums = async () => {
  const accessToken = (await requestToken()).data.access_token

  return axios.get(ALBUM_RELEASES_URL, {
    headers: {'Authorization': 'Bearer ' + accessToken}
  })
}
