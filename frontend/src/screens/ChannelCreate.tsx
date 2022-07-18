import { useEffect, useState } from "react";

import { ChannelList } from "./ChannelList";
import { useChannelContext } from "../hooks/useChannelContext";
import { useNavigate } from "react-router-dom";

export const ChannelCreate = () => {
  const [channelName, setChannelName] = useState("");
  const { createChannel, userName } = useChannelContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userName) {
      navigate("/login");
      return;
    }
  }, []);

  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center justify-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (!channelName) return;

          createChannel(channelName);
          setChannelName("");
        }}
        className="form"
      >
        <input
          type="text"
          name="channel-name"
          id="channel-name"
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
          placeholder="Nome do canal"
          className="input"
        />
        <div>
          <p>Canais disponiveis:</p>
          <ChannelList />
        </div>
        <button type="submit" className="button" disabled={!channelName}>
          Criar
        </button>
      </form>
    </div>
  );
};
