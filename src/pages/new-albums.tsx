import { useEffect, useState } from 'react'

import { getNewAlbums } from '../api.ts'
import Albums from '../components/albums/Albums.tsx'
import { type AlbumType, isNonEmptyArray } from '../types.ts'
import { Container } from '../components/shared-components.tsx'

const NewAlbums = () => {
  const [albums, setAlbums] = useState<AlbumType[]>([])

  useEffect(() => {
    getNewAlbums()
      .then((response) => {
        setAlbums(response.data.albums.items)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return <Container>
    {isNonEmptyArray(albums) ? <Albums albums={albums} /> : <p>Loading...</p>}
  </Container>
}

export default NewAlbums
