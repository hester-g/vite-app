import type { ImageType } from '@t'

export const getImage64 = (images: ImageType[]) =>
  images.find((img) => img.height === 64) as ImageType

