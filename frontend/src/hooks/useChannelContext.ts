import { ChannelContext } from "../context/ChannelContext";
import { useContext } from "react";

export const useChannelContext = () => {
  const context = useContext(ChannelContext);

  return context;
};
