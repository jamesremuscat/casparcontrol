import { usePlaylist } from '../playlist';

export const Playlist = () => {

  const items = usePlaylist(state => state.items);

  return (
    <div>
      {
        items.map(
          (i, idx) => (
            <p key={idx}>
              {JSON.stringify(i)}
            </p>
          )
        )
      }
      {items.length} item(s)
    </div>
  );
};
