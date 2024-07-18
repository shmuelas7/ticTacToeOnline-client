import style from "./style.module.css"
import SmallButton from "../../components/SmallButton"
import Loading from "../../components/Loading"
import Text from "../..//components/Text"
import useData from "../../context/DataContext";
import { useEffect, useState } from "react"
import { PiArrowArcLeft } from "react-icons/pi";
import useSocket from "../../context/SocketContext";
import Menu from "../Menu";
import BoardWithPlayer from "../BoardWithPlayer";





export default function WaitingJoin() {
    const { setPage } = useData()
    const { socket } = useSocket();


    useEffect(() => {
        socket.on("start-game", (startGame) => {
            if (startGame)
                setPage(<BoardWithPlayer />)
        });

        console.log("enter Waiting");
    }, [])

    useEffect(() => {


    }, [])


    return (
        <div className={style.container}>
            <div className={style.btn}>
                <SmallButton onClick={() => setPage(<Menu />)} ><PiArrowArcLeft size="40" color="white" /></SmallButton>
            </div>
            <div className={style.Loading}>
                <Loading />
            </div>
            <div className={style.text}>
                <Text text="WAITING" />
                <Text text="JOIN TO THE GAME" />
            </div>
        </div >
    )
}