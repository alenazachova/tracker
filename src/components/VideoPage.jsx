export const VideoPage = () => {
  // In public folder
  return (
    <video
      controls={true}
      src={"./video.mp4"}
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
};
