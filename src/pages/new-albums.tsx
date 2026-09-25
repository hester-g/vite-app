import { useEffect, useState } from 'react'
import { Container } from '@shared'
import { type AlbumType } from '@t'
import { isNonEmptyArray } from '@t/guards'

import { getNewAlbums } from '../api'
import List from '../components/ui/List'

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
