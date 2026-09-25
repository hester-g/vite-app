import type { AlbumType, NonEmptyArray, TrackType } from './index'

export const isNonEmptyArray = <T>(arr: T[]): arr is NonEmptyArray<T> =>
  arr.length > 0

export const isAlbumType = (item: AlbumType | TrackType): item is AlbumType =>
  item.type === 'album'

export const isTrackType = (item: AlbumType | TrackType): item is TrackType =>
  item.type === 'track'
