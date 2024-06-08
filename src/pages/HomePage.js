import { useContext } from "react";
import Notifications from "../components/Notifications";
import Options from "../components/Options";
import VideoPlayer from "../components/VideoPlayer";
import { SocketContext } from "../context/Context";
import SignInPage from "./SignIn";
import UsersList from "../components/UsersList";

export default function HomePage() {
  const { name, setName } = useContext(SocketContext);

  if (name)
    return (
      <>
        <VideoPlayer />
        <UsersList />
        {/* <Options /> */}
        <Notifications />
      </>
    );
  else return <SignInPage />;
}
