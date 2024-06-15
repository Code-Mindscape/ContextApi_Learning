import React from "react";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <>
      <h2>Login</h2>

      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
      />

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default login;
