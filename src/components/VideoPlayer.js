import { useContext } from "react";
import { SocketContext } from "../context/Context";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  return (
    <div className="grid justify-center grid-cols-2 gap-4 mt-12">
      {/* My video */}
      {stream && (
        <div className="col-span-1">
          <h5 className="text-lg font-bold mb-4">{name || "Name"}</h5>
          <video
            className="w-full"
            playsInline
            muted
            ref={myVideo}
            autoPlay
            width="600"
          />
        </div>
      )}

      {/* User's video */}
      {callAccepted && !callEnded && (
        <div className="col-span-1">
          <h5 className="text-lg font-bold mb-4">{call.name || "Name"}</h5>
          <video
            className="w-full"
            playsInline
            ref={userVideo}
            autoPlay
            width="60"
          />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
