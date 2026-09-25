import { DisplayCard } from '@shared'
import type { ImageType } from '@t'
import type { AlbumProps } from '@t/props'

const Album = ({ album }: AlbumProps) => {
  const image64 = album.images.find((img) => img.height === 64) as ImageType

  return (
    <DisplayCard
      imageUrl={image64.url}
      imageName={album.name + ' cover art'}
      itemName={album.name}
      artistNames={album.artists.map((artist) => artist.name)}
    />
  )
}

export default Album
