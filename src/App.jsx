import { useState } from "react";
import { SocketContext } from "./context/SocketContext";
import { DataContext } from "./context/DataContext";
import './App.css'
import Layout from "./pages/Layout";
import Welcome from "./pages/Welcome";
import { io } from "socket.io-client";


function App() {
  const [socket, setSocket] = useState(io());
  const [page, setPage] = useState(<Welcome />);
  return (
    <>
      <SocketContext.Provider value={{ socket, setSocket }}>
        <DataContext.Provider value={{ page, setPage }}>
          <Layout />
        </DataContext.Provider>
      </SocketContext.Provider >
    </>
  )
}

export default App
