import { useState, useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { BiClipboard, BiPhoneCall, BiPhoneOff } from "react-icons/bi";
import { SocketContext } from "../context/Context";

const Options = () => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <div className="container max-w-2xl mx-auto my-5 p-4 border-2 border-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
        {/* Account Info */}
        <div className="p-6">
          <h6 className="text-lg font-semibold mb-4">Account Info</h6>
          <label className="block mb-2">Username</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-2 border-gray-300 p-2 rounded"
          />
          <CopyToClipboard text={me}>
            <button className="flex items-center px-4 py-2 mt-4 bg-teal-500 text-white rounded hover:bg-teal-600">
              <BiClipboard className="mr-2" /> Copy ID
            </button>
          </CopyToClipboard>
        </div>

        {/* Make a Call */}
        <div className="p-6">
          <h6 className="text-lg font-semibold mb-4">Make a Call</h6>
          <label className="block mb-2">User id to call</label>
          <input
            type="text"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
            className="w-full border-2 border-gray-300 p-2 rounded"
          />
          {callAccepted && !callEnded ? (
            <button
              onClick={leaveCall}
              className="flex items-center px-4 py-2 mt-4 bg-teal-500 text-white rounded hover:bg-teal-600"
            >
              <BiPhoneOff className="mr-2" /> Hang up
            </button>
          ) : (
            <button
              onClick={() => callUser(idToCall)}
              className="flex items-center px-4 py-2 mt-4 bg-teal-500 text-white rounded hover:bg-teal-600"
            >
              <BiPhoneCall className="mr-2" /> Call
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Options;
