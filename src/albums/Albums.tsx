import Album from './album/Album.tsx'
import type { AlbumType, NonEmptyArray } from '../types.ts'

type AlbumsProps = {
  albums: NonEmptyArray<AlbumType>
}

const Albums = ({ albums }: AlbumsProps) => {
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

export default Albums
