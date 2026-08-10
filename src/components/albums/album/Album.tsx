import type { AlbumType, ContainerType, ImageType } from '../../../types.ts'
import { Container } from '../../shared-components.tsx'

type AlbumProps = {
  album: AlbumType
}

const Album = ({ album }: AlbumProps) => {
  const ImageContainer = ({ children }: ContainerType) => (
    <div className={'px-4 items-start'}>{children}</div>
  )
  const TextContainer = ({ children }: ContainerType) => (
    <div className={'px-4'}>{children}</div>
  )

  const image64 = album.images.find((img) => img.height === 64) as ImageType

  return (
    <Container>
      <ImageContainer>
        <img src={image64.url} alt={album.name + ' cover art'} />
      </ImageContainer>
      <TextContainer>
        <p className={'text-white'}>{album.name}</p>
        <p>{album.artists[0].name}</p>
      </TextContainer>
    </Container>
  )
}

export default Album
