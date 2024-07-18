import Menu from '../Menu'
import { io } from 'socket.io-client'
import { useEffect } from "react";
import useSocket from "../../context/SocketContext";
import useData from "../../context/DataContext";


export default function Layout() {

    const { page, setPage } = useData()
    const { socket, setSocket } = useSocket();

    useEffect(() => setSocket(io('http://localhost:2501')), [])

    useEffect(() => {

        if (socket.connect) {
            setTimeout(() => setPage(<Menu />), 2000)
        }
    }, [socket])

    return (
        <div>
            {page}
        </div>
    )
} 
