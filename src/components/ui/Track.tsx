import { Container, ImageContainer, TextContainer } from '@shared'
import type { ImageType } from '@t'
import type { TrackProps } from '@t/props'

const Track = ({ track }: TrackProps) => {
  const image64 = track.album.images.find(
    (img) => img.height === 64,
  ) as ImageType

  return (
    <Container>
      <ImageContainer>
        <img src={image64.url} alt={track.album.name + ' cover art'} />
      </ImageContainer>
      <TextContainer>
        <p className={'text-white'}>{track.name}</p>
        <p>{track.artists[0].name}</p>
      </TextContainer>
    </Container>
  )
}

export default Track
