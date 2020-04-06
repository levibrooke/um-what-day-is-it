import React from "react";
import ReactPlayer from "react-player";

const dayContent = (props) => {
  const dayOfWeek = props.todayIs.toUpperCase();
  const todaysContent = props.data;
  const mediaType = todaysContent.mediatype;
  const message = todaysContent.message;

  let media;
  if (mediaType === "image") {
    media = <img src={todaysContent.medialink} alt={todaysContent.alt} />
  } else if (mediaType === "video") {
    media = <ReactPlayer
              controls={true}
              url={todaysContent.medialink}
            />;
  }

  return (
    <>
      <h2>{dayOfWeek}</h2>
      {media}
      <p>{message}</p>
    </>
  )

}

export default dayContent;
