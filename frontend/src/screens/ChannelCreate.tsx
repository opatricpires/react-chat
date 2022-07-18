import { useEffect, useState } from "react";

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
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (!channelName) return;

          createChannel(channelName);
          setChannelName("");
        }}
      >
        <label>Nome do canal</label>
        <input
          type="text"
          name="channel-name"
          id="channel-name"
          value={channelName}
          onChange={(e) => setChannelName(e.target.value)}
        />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};
