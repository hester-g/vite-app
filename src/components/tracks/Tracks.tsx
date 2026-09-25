import type { NonEmptyArray, TrackType } from '../../types.ts'
import Track from './track/Track.tsx'

type TracksProps = {
  tracks: NonEmptyArray<TrackType>
}

const Tracks = ({ tracks }: TracksProps) => {
  return (
    <ul>
      {tracks.map((track) => (
        <li key={track.id}>
          <Track track={track}></Track>
        </li>
      ))}
    </ul>
  )
}

export default Tracks
