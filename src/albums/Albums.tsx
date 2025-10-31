import Album from './Album.tsx'
import type { AlbumType } from '../types.ts'

type AlbumsProps = {
  albums: AlbumType[]
}

const Albums = ({ albums }: AlbumsProps) => {
  if (albums.length > 0) {
    return (
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <Album album={album}></Album>
          </li>
        ))}
      </ul>
    )
  }

  return <>Pls</>
}

export default Albums
