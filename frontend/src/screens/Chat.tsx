import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import { useChannelContext } from "../hooks/useChannelContext";

export const Chat = () => {
  const [message, setMessage] = useState("");
  const { channel, joinChannel, createMessage, userName } = useChannelContext();
  const { channelId } = useParams<{ channelId: string }>();
  const navigate = useNavigate();
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!channelId) {
      navigate("/channels");
      return;
    }

    if (!userName) {
      navigate("/login");
      return;
    }

    joinChannel(channelId);
  }, []);

  const goToBottom = () => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current?.scrollHeight;
    }
  };

  useEffect(() => {
    goToBottom();
  }, [channel?.messages]);

  return (
    <div>
      <div>
        <h5># {channel?.name}</h5>
        <Link to="/channels">Voltar</Link>
      </div>

      <div style={{ maxHeight: "300px", overflowY: "scroll" }} ref={divRef}>
        {channel?.messages.map((message, index) => (
          <div key={index}>
            <strong>{message.userName}</strong>: {message.message}
          </div>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!message) return;

          createMessage(message);
          setMessage("");
        }}
      >
        <input
          type="text"
          name="new-message"
          id="new-message"
          placeholder="Escreva sua mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
