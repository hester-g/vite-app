type SpotifyEntity = {
  id: string
  name: string
  type: 'artist' | 'album'
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
