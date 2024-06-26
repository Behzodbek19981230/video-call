import React, { useContext } from "react";
import { SocketContext } from "../context/Context";
import { useSearchParams } from "react-router-dom";

const SignInPage = () => {
  const { name, setName, joinRoom } = useContext(SocketContext);
  const [searchParams] = useSearchParams();
  const onSubmit = (e) => {
    e.preventDefault();
    const fullname = document.getElementById("name").value;
    setName(fullname);
    joinRoom(searchParams.get("roomID"), fullname);
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="text-4xl text-white font-bold">Join meet</div>
        </div>
        {/* <h2 className="text-lg text-center text-gray-400 mb-6">
          Sign in to video_conf
        </h2> */}

        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="name">
              Full Name
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
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
