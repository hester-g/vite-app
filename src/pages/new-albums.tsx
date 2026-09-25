import { useEffect, useState } from 'react'

import { getNewAlbums } from '../api.ts'
import { Container } from '../components/container.tsx'
import List from '../components/ui/List.tsx'
import { type AlbumType, isNonEmptyArray } from '../types.ts'

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

  return (
    <Container>
      {isNonEmptyArray(albums) ? <List items={albums} /> : <p>Loading...</p>}
    </Container>
  )
}

export default NewAlbums
