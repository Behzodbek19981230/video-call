import { createContext, useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";
import { useSearchParams } from "react-router-dom";

const SocketContext = createContext();
const socket = io("https://api.onlayn-dars.uz");
// const socket = io("http://localhost:8080");
const ContextProvider = ({ children }) => {
  const [roomId, setRoomId] = useState("");
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState("");
  const [call, setCall] = useState({});
  const [me, setMe] = useState("");

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    if (name != "") {
      localStorage.setItem("videoName", name);
    }
    if (localStorage.getItem("videoName")) {
      setName(localStorage.getItem("videoName"));
    }
  }, [name]);

  useEffect(() => {
    if (window.location.pathname == "/home") {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((currentStream) => {
          setStream(currentStream);
          if (myVideo.current) {
            myVideo.current.srcObject = currentStream;
          }
        })
        .catch((error) => {
          console.error("Kamerani olishda xatolik yuz berdi:", error);
        });

      socket.on("me", (id) => setMe(id));
      socket.on("callUser", ({ from, name: callerName, signal }) => {
        setCall({ isReceivingCall: true, from, name: callerName, signal });
      });
    }
    return () => {
      // Birinchi argument bo'lmagan to'xtash funktsiyasi
      // useEffect tugaganidan so'ng ishga tushadi
      // Bu yerda kamerani o'chirish yoki boshqa ishlar bajarishingiz mumkin
      // Bu yerda kamerani to'xtatish, resurslarni tozalash va ko'ngilliklarini to'xtatishni amalga oshirish uchun foydalanish mumkin
    };
  }, [myVideo.current, name]);
  const joinRoom = (room, name) => {
    socket.emit("joinRoom", { roomID: room, name });
    const peer = new Peer({ initiator: false, trickle: false, stream });
    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, roomID: room });
    });
    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });
    peer.signal(call.signal);
  };
  const createRoom = (roomID, name) => {
    console.log("name", name);
    socket.emit("createRoom", { roomID, name });
  };
  const sendMessage = (message) => {
    socket.emit("sendMessage", { message, roomId });
  };
  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({ initiator: false, trickle: false, stream });
    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: call.from });
    });
    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });
    peer.signal(call.signal);
    connectionRef.current = peer;
  };

  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });
    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name,
      });
    });
    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });
    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
    window.location.reload();
  };

  return (
    <SocketContext.Provider
      value={{
        call,
        callAccepted,
        myVideo,
        userVideo,
        stream,
        name,
        roomId,
        setName,
        callEnded,
        me,
        callUser,
        leaveCall,
        answerCall,
        createRoom,
        joinRoom,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};
export { ContextProvider, SocketContext };
