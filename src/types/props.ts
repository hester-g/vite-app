import type { ReactNode } from 'react'
import type { AlbumType, NonEmptyArray, TrackType } from '@t'

export interface ListProps {
  items: NonEmptyArray<AlbumType | TrackType>
}

export interface AlbumProps {
  album: AlbumType
}

export interface TrackProps {
  track: TrackType
}

export interface ContainerProps {
  children?: ReactNode
}

export interface DisplayCardProps {
  imageUrl: string
  imageName: string
  itemName: string
  artistNames: string[]
}
