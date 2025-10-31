import './App.css'
import { useEffect, useState } from 'react'
import { getNewAlbums } from './api.ts'
import Albums from './albums/Albums.tsx'

function App() {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    getNewAlbums()
      .then((response) => {
        setAlbums(response.data.albums.items)
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return <Albums albums={albums} />
}

export default App
