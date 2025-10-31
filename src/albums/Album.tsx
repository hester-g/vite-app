import type { AlbumType } from '../types.ts'

type AlbumProps = {
  album: AlbumType
}

const Album = ({ album }: AlbumProps) => {
  return <div className={'p-1'}>{album.name}</div>
}

export default Album
