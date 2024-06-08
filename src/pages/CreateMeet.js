import React, { useContext } from "react";
import { SocketContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { keyForRoom } from "../service";

export default function CreateMeet() {
  const { createRoom, setName } = useContext(SocketContext);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const roomID = keyForRoom;
    createRoom(roomID, name);
    setName(name);
    navigate(`/home?roomID=${roomID}`);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="text-4xl text-white font-bold">Create meet</div>
        </div>
        {/* <h2 className="text-lg text-center text-gray-400 mb-6">
      Sign in to video_conf
    </h2> */}

        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="name">
              Full name
            </label>
            <input
              type="text"
              id="name"
              className="w-full py-2 px-4 rounded bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="behzodrasulov432@gmail.com"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Create meet
          </button>
        </form>
        <div className="text-center text-gray-400 mt-4">
          <a href="/signup" className="text-blue-400">
            Join meet
          </a>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        Secured by{" "}
        <span className="text-white font-semibold"> Rasulov Bekhzod</span>
      </div>
    </div>
  );
}
