import type { ContainerProps, DisplayCardProps } from '@t/props'

export const Container = ({ children }: ContainerProps) => (
  <div className={'flex justify-baseline items-center min-w-3xl py-4'}>
    {children}
  </div>
)

export const ImageContainer = ({ children }: ContainerProps) => (
  <div className={'px-4 items-start'}>{children}</div>
)

export const TextContainer = ({ children }: ContainerProps) => (
  <div className={'px-4'}>{children}</div>
)

export const DisplayCard = ({
  imageUrl,
  imageName,
  itemName,
  artistNames,
}: DisplayCardProps) => {
  return (
    <Container>
      <ImageContainer>
        <img src={imageUrl} alt={imageName} />
      </ImageContainer>
      <TextContainer>
        <p className={'text-white'}>{itemName}</p>
        <p>{artistNames.join(', ')}</p>
      </TextContainer>
    </Container>
  )
}
