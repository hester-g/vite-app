import { useEffect } from 'react'
import { useSearchParams } from 'react-router'

import { getTop, loginUser } from '../api.ts'
import { Container } from '../components/shared-components.tsx'

const MySpotify = () => {
  let [searchParams] = useSearchParams()
  const spotifyAccessCode = new URLSearchParams(searchParams).get('code')

  useEffect(() => {
    if (spotifyAccessCode) {
      getTop('tracks', 'short_term', spotifyAccessCode)
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.error(err)
        })
    }
  }, [])

  return (
    <Container>
      <p>Your spotify...</p>
      <button onClick={loginUser}>Login</button>
    </Container>
  )
}

export default MySpotify
