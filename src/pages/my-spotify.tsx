import { useEffect, useState } from 'react'

import { getTop, loginUser } from '../api.ts'
import List from '../components/ui/List.tsx'
import { Container } from '../components/ui/container.tsx'
import { useLogin } from '../components/use-login.tsx'
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
      {isNonEmptyArray(tracks) ? <List items={tracks} /> : <p>Loading...</p>}
    </Container>
  )
}

export default MySpotify
