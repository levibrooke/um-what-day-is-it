import React from "react";
import ReactPlayer from "react-player";
import TweetEmbed from "react-tweet-embed";

const dayContent = (props) => {
  const dayOfWeek = props.todayIs;
  const todaysContent = props.data;
  const mediaType = todaysContent.mediatype;
  const message = todaysContent.message;

  let media;
  if (mediaType === "image") {
    media = <img src={todaysContent.medialink} alt={todaysContent.alt} />
  } else if (mediaType === "video") {
    media = <div className="video">
        <ReactPlayer
          controls={true}
          className="react-player"
          width="100%"
          height="100%"
          url={todaysContent.medialink}
        />
      </div>;
  } else if (mediaType === "twitter-embed") {
    let tweetId = todaysContent.medialink.slice(1, -1);
    media = <TweetEmbed id={tweetId} placeholder={'loading'} />;
  }

  return (
    <>
      <div className="intro-container">
        <h3>Bingo bango! Today is</h3>
        <h2>{dayOfWeek}</h2>
      </div>
      <div className="media-container">
        {media}
      </div>
      <div className="message-container">
        <p>{message}</p>
      </div>
    </>
  )

}

export default dayContent;
