import type { AlbumType } from '../types.ts'

type AlbumProps = {
  album: AlbumType
}

const Album = ({ album }: AlbumProps) => {
  return <>{album.name}</>
}

export default Album