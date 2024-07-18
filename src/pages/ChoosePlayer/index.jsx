import HeadLine from "../../components/HeadLine"
import Board from "../../components/Board"
import style from "./style.module.css"
import Cell from "../../components/Cell"
import x from "../../assets/Xplayer.svg"
import o from "../../assets/Oplayer.svg"
import xempty from "../../assets/Xempty.svg"
import oempty from "../../assets/Oempty.svg"
import Button from "../../components/Button"
import SmallButton from "../../components/SmallButton"
import { PiArrowArcLeft } from "react-icons/pi";
import useData from "../../context/DataContext";
import { useState } from "react"
import Menu from "../Menu";
import BoardWithPlayer from "../BoardWithPlayer"
import useSocket from "../../context/SocketContext";


export default function ChoosePlayer() {
    const { setPage } = useData()
    const [choose, setChoose] = useState(null)
    const { socket } = useSocket();
    const enter = () => {
        const player = {
            avatar: localStorage.setting?.avatar || 'avatar.jpg',
            name: localStorage.setting?.name || 'anonymous',
            id: socket.id
        }

        socket.emit("start-game", choose, player)

        socket.on("start-game", (startGame) => {
            if (startGame)
                setPage(<BoardWithPlayer />)
        });

    }

    return (<div className={style.container}>
        <div className={style.BackButton}>
            <SmallButton onClick={() => setPage(<Menu />)} ><PiArrowArcLeft size="40" color="white" /></SmallButton>
        </div>
        <div className={style.text}>
            <HeadLine text="CHOOSE PLAYER" />
        </div>
        <div className={style.board}>
            <Board>
                <div className={style.cellContainer}>
                    <Cell>
                        <img src={choose === 'o' ? xempty : x} className={choose === 'x' ? style.Big : style.img} onClick={() => setChoose('x')} />
                    </Cell>

                    <Cell>
                        <img src={choose === 'x' ? oempty : o} className={choose === 'o' ? style.Big : style.img} onClick={() => setChoose('o')} />
                    </Cell>
                </div>
            </Board>
        </div>
        {choose &&
            <div className={style.btn}>
                <Button text='LETS PLAY' onClick={() => enter()} />
            </div>}
    </div>)
}