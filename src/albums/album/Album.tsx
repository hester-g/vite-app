import { type ReactNode } from 'react'
import type { AlbumType, ImageType } from '../../types.ts'

type AlbumProps = {
  album: AlbumType
}

type ContainerType = { children?: ReactNode }

const Album = ({ album }: AlbumProps) => {
  console.log(album)
  const FlexContainer = ({ children }: ContainerType) => (
    <div className={'flex justify-baseline items-center min-w-3xl py-4'}>{children}</div>
  )
  const TextContainer = ({ children }: ContainerType) => (
    <div className={'px-4'}>{children}</div>
  )
  const ImageContainer = ({ children }: ContainerType) => (
    <div className={'px-4 items-start'}>{children}</div>
  )

  const image64 = album.images.find(img => img.height === 64) as ImageType

  return <FlexContainer>
    <ImageContainer>
      <img src={image64.url} alt={album.name + ' cover art'} />
    </ImageContainer>
    <TextContainer>
      <p>{album.name}</p>
      <p>{album.artists[0].name}</p>
    </TextContainer>

  </FlexContainer>
}

export default Album
