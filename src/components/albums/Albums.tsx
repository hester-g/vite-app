import type { AlbumType, NonEmptyArray } from '../../types.ts'
import Album from './album/Album.tsx'

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
