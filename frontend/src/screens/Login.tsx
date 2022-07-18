import { useChannelContext } from "../hooks/useChannelContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { login } = useChannelContext();

  return (
    <div className="w-full h-screen bg-zinc-900 flex justify-center items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(userName);
          navigate("/channels");
        }}
        className="form"
      >
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Email"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="input"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <button
          type="submit"
          className="button"
          disabled={!userName || !password}
        >
          Entrar
        </button>
      </form>
    </div>
  );
};
