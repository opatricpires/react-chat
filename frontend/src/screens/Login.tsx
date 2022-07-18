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
        className="w-80 h-96 bg-slate-50 px-4 py-6 rounded-md flex flex-col"
      >
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Email"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="rounded-md p-2 focus:outline-none focus:border-zinc-900 focus:border mb-4"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-md p-2 focus:outline-none focus:border-zinc-900 focus:border"
        />
        <button
          type="submit"
          className="mt-auto w-full h-12 bg-zinc-700 rounded-md text-slate-50 disabled:cursor-not-allowed disabled:opacity-20"
          disabled={!userName || !password}
        >
          Entrar
        </button>
      </form>
    </div>
  );
};
