import SpotifyPlayer from "react-spotify-player";

const SpotifyPlayerWidget = (props) => {
  const size = {
    width: 1000,
    height: 300,
  };
  const view = "list"; // or 'coverart'
  const theme = "black"; // or 'white'

  return (
    <>
      <SpotifyPlayer uri={props.url} size={size} view={view} theme={theme} />
    </>
  );
};

export default SpotifyPlayerWidget;
