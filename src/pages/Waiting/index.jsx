import SmallButton from "../../components/SmallButton"
import Loading from "../../components/Loading"
import Board from "../../components/Board"
import TextInput from "../../components/TextInput"
import style from "./style.module.css"
import Text from "../../components/Text"
import useData from "../../context/DataContext";
import useSocket from "../../context/SocketContext";
import { useEffect, useState } from "react"
import { PiArrowArcLeft } from "react-icons/pi";
import Menu from "../Menu";
import ChoosePlayer from "../ChoosePlayer"


export default function Waiting({ code }) {
    const { setPage } = useData()
    const { socket } = useSocket();
    const [roomNum, setRoomNum] = useState()

    useEffect(() => {
        socket.emit("create-game")
        socket.on("awaiting", (code) => {
            if (!code) return;
            setRoomNum(JSON.stringify(code))
        });

        console.log("enter Waiting");

        socket.on("join-user", (isFind) => {
            setPage(isFind ? <ChoosePlayer /> : <Menu />)
        });
    }, [])


    return (
        <div className={style.container}>
            <div className={style.BackButton}>
                <SmallButton onClick={() => { setPage(<Menu />) }} ><PiArrowArcLeft size="40" color="white" /></SmallButton>
            </div>
            <div className={style.input}>
                <Board title="YOUR CODE" ><p className={style.p}>{roomNum}</p></Board>
            </div>
            <div className={style.loading}>
                <Loading />
            </div>
            <Text text=" waiting for opponent" />

        </div>
    )
}