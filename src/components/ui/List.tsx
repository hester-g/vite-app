import {
  type AlbumType,
  type NonEmptyArray,
  type TrackType,
  isAlbumType,
  isTrackType,
} from '../../types.ts'
import Album from './Album.tsx'
import Track from './Track.tsx'

interface ListProps {
  items: NonEmptyArray<AlbumType | TrackType>
}

const List = ({ items }: ListProps) => {
  const Component = ({ item }: { item: AlbumType | TrackType }) => {
    if (isAlbumType(item)) {
      return <Album album={item} />
    }

    if (isTrackType(item)) {
      return <Track track={item} />
    }

    throw new Error('Component type not valid.')
  }

  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Component item={item} />
          </li>
        )
      })}
    </ul>
  )
}

export default List
