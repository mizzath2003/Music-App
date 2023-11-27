import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import {
  useGetArtistDetailsQuery,
  useGetArtistSongsQuery,
} from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching: isFetchingArtistDetails } =
    useGetArtistDetailsQuery(artistId);
  const {
    data,
    isFetching: isFetchingArtistSongs,
    error,
  } = useGetArtistSongsQuery(artistId);

  if (isFetchingArtistDetails || isFetchingArtistSongs) {
    return <Loader title="Loading artist details" />;
  }

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />

      {/* {console.log(data)} */}

      <RelatedSongs
        data={Object.values(data?.data)}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
