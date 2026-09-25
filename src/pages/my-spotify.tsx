import { useEffect, useState } from 'react'

import { getTop, loginUser } from '../api.ts'
import { useLogin } from '../components/login-context.tsx'
import { Container } from '../components/shared-components.tsx'
import Tracks from '../components/tracks/Tracks.tsx'
import { type TrackType, isNonEmptyArray } from '../types.ts'

const MySpotify = () => {
  const [tracks, setTracks] = useState<TrackType[]>([])
  const { loginToken } = useLogin()

  useEffect(() => {
    if (loginToken) {
      getTop('tracks', 'short_term', loginToken)
        .then((response) => {
          console.log(response.data)
          setTracks(response.data.items)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }, [loginToken])

  return (
    <Container>
      <button
        className={
          'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md cursor-pointer transition-colors'
        }
        onClick={loginUser}
      >
        Login
      </button>
      {isNonEmptyArray(tracks) ? <Tracks tracks={tracks} /> : <p>Loading...</p>}
    </Container>
  )
}

export default MySpotify
