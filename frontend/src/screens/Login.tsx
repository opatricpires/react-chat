import { useChannelContext } from "../hooks/useChannelContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const { login } = useChannelContext();

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(userName);
          navigate("/channels");
        }}
      >
        <label>Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Seu usuário"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};
