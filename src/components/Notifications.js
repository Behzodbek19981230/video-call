import { useContext } from "react";
import { SocketContext } from "../context/Context";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div className="flex justify-around mb-20">
          <h3 className="text-xl">{call.name} is calling</h3>
          <button
            className="border border-black px-4 py-2 rounded hover:bg-gray-200"
            onClick={answerCall}
          >
            Answer Call
          </button>
        </div>
      )}
    </>
  );
};

export default Notifications;
