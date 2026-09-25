import { Container, ImageContainer, TextContainer } from '@shared'
import type { ImageType } from '@t'
import type { AlbumProps } from '@t/props.ts'

const Album = ({ album }: AlbumProps) => {
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
