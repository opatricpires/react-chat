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
    <div className="w-full h-screen bg-zinc-900 flex flex-col justify-center items-center">
      <div className="w-80 flex justify-between mb-4">
        <h5 className="text-white"># {channel?.name}</h5>
        <Link to="/channels" className="text-white text-xs">
          Voltar
        </Link>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!message) return;

          createMessage(message);
          setMessage("");
        }}
        className="form"
      >
        <input
          type="text"
          name="new-message"
          id="new-message"
          placeholder="Escreva sua mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input"
        />

        <div
          style={{ maxHeight: "300px", overflowY: "scroll" }}
          ref={divRef}
          className="w-full bg-white rounded-sm h-full mb-4"
        >
          {channel?.messages.map((message, index) => (
            <div key={index} className="mb-1">
              <strong>{message.userName}</strong>: {message.message}
            </div>
          ))}
        </div>

        <button type="submit" className="button" disabled={!message}>
          Enviar
        </button>
      </form>
    </div>
  );
};
