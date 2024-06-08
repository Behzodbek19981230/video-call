import React, { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/Context";

const UsersList = () => {
  const socket = useContext(SocketContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Serverdan foydalanuvchilar ro'yxatini so'rang
    socket.emit("getUsers", (userList) => {
      setUsers(userList);
    });

    socket.on("userJoined", (user) => {
      // Foydalanuvchi qo'shilganda ishlaydi
      setUsers((prevUsers) => [...prevUsers, user]);
    });

    return () => {
      // Komponent bekor qilindi
      socket.off("userJoined");
    };
  }, []);

  return (
    <div>
      <h2>Users in Room:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
