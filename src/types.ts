import type { Dispatch, ReactNode, SetStateAction } from 'react'

export type NonEmptyArray<T> = [T, ...T[]]
export const isNonEmptyArray = <T>(arr: T[]): arr is NonEmptyArray<T> =>
  arr.length > 0

export type ContainerType = { children?: ReactNode }

type SpotifyEntityType = 'artist' | 'album' | 'track'

type SpotifyEntity = {
  id: string
  name: string
  type: SpotifyEntityType
  uri: string
  href: string
  external_urls: { spotify: string }
}

type Artist = SpotifyEntity & {
  type: 'artist'
}

type ImageBase = {
  url: string
  height: number
  width: number
}

export type ImageType = ImageBase &
  (
    | {
        height: 64
        width: 64
      }
    | {
        height: 300
        width: 300
      }
    | {
        height: 640
        width: 640
      }
  )

export type AlbumType = SpotifyEntity & {
  type: 'album'
  artists: Artist[]
  album_type: 'album' | 'single'
  release_date: string
  release_date_precision: 'day'
  images: ImageType[]
  available_markets: string[]
  total_tracks: number
}

export type TrackType = SpotifyEntity & {
  type: 'track'
  artists: Artist[]
  album: AlbumType
  popularity: number // 1-100?
  explicit: boolean
  track_number: number
}

export type TokenRequestDataType =
  | {
      postData: {
        grant_type: 'client_credentials'
        client_id: string
        client_secret: string
      }
    }
  | {
      postData: {
        grant_type: 'authorization_code'
        code: string
        redirect_uri: string
      }
      authorizationHeader: string
    }

export type ProcessLoginProps = {
  loginToken: string | undefined
  setLoginToken: Dispatch<SetStateAction<string | undefined>>
}

export const isAlbumType = (item: AlbumType | TrackType): item is AlbumType =>
  item.type === 'album'

export const isTrackType = (item: AlbumType | TrackType): item is TrackType =>
  item.type === 'track'

export type LoginToken = string | undefined
