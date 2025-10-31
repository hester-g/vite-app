import Album from './Album.tsx'
import type { AlbumType } from '../types.ts'

type AlbumsProps = {
  albums: AlbumType[]
}

const Albums = ({ albums }: AlbumsProps) => {
  if (albums.length > 0) {
    return (
      <>
        {albums.map((album) => (
          <Album album={album} key={album.id}></Album>
        ))}
      </>
    )
  }

  return <>Pls</>
}

export default Albums
