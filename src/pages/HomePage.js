import Notifications from "../components/Notifications";
import Options from "../components/Options";
import VideoPlayer from "../components/VideoPlayer";

export default function HomePage() {
  return (
    <>
      <h1> Video Chat App </h1>
      <VideoPlayer />
      <Options />
      <Notifications />
    </>
  );
}
