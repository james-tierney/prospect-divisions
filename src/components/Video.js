import React from "react";
import ReactPlayer from "react-player";
import data from "./Data";

// could possibly pass in prop value show video that will show the yt video if yes if not then just use the audio by hiding video using css
export function Video(props) {
  const [play, setPlay] = React.useState(false);

  const styles = {
    videoContainer: {
      position: "relative",
      paddingTop: "44%",
    },
    reactPlayer: {
      height: "15%",
      width: "20%",
    },
  };

  return (
    <ReactPlayer
      height="100%"
      width="100%"
      url={props.url}
      id={props.id}
      playing={props.playing}
    />
  );
}

/**
 *
 *
 * onclick of each react player we can possibly loop through the array videos and set the playing state to the rest to false
 * by going through and finding the id of the one that is clicked
 * and every other one we set their state to not playing
 *
 */
