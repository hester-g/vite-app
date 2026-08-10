import './App.css'
import { useEffect, useState } from 'react'
import { getNewAlbums } from './api.ts'
import Albums from './albums/Albums.tsx'
import  { type AlbumType, isNonEmptyArray } from './types.ts'

function App() {
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

  if (isNonEmptyArray(albums)) {
    return <Albums albums={albums} />
  } else {
    return <p>Loading...</p>
  }
}

export default App
