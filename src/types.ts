type Artist = {
  type: 'artist'
  id: string
  name: string
  uri: string
}

type Image = {
  width: number
  height: number
  url: string
}

export type AlbumType = {
  type: 'album'
  id: string
  name: string
  release_date: string
  album_type: 'album' | 'single'
  artists: Artist[]
  images: Image[]
}
