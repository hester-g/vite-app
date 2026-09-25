import type { AlbumType, NonEmptyArray, TrackType } from '@t'

export interface ListProps {
  items: NonEmptyArray<AlbumType | TrackType>
}

export type AlbumProps = {
  album: AlbumType
}

export type TrackProps = {
  track: TrackType
}
