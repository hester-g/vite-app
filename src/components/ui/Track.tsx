import type { ContainerType, ImageType, TrackType } from '../../types.ts'
import { Container } from '../container.tsx'

type TrackProps = {
  track: TrackType
}

const ImageContainer = ({ children }: ContainerType) => (
  <div className={'px-4 items-start'}>{children}</div>
)
const TextContainer = ({ children }: ContainerType) => (
  <div className={'px-4'}>{children}</div>
)

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
