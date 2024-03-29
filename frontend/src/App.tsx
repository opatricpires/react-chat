import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ChannelCreate } from "./screens/ChannelCreate";
import { ChannelList } from "./screens/ChannelList";
import { Chat } from "./screens/Chat";
import { Login } from "./screens/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/chat/:channelId" element={<Chat />} />
        <Route path="/channels" element={<ChannelCreate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
