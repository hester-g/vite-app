import { DisplayCard } from '@shared'
import type { TrackProps } from '@t/props'
import { getImage64 } from '@util'

const Track = ({ track }: TrackProps) => {
  const image64 = getImage64(track.album.images)

  return (
    <DisplayCard
      imageUrl={image64.url}
      imageName={track.album.name + ' cover art'}
      itemName={track.album.name}
      artistNames={track.album.artists.map((artist) => artist.name)}
    />
  )
}

export default Track
