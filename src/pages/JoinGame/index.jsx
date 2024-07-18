import style from "./style.module.css"
import HeadLine from "../../components/HeadLine";
import Board from "../../components/Board";
import Button from "../../components/Button";
import { PiArrowArcLeft } from "react-icons/pi";
import SmallButton from "../../components/SmallButton";
import useData from "../../context/DataContext";
import { useRef, useState } from "react"
import WaitingJoin from "../WaitingJoin";
import Menu from "../Menu";
import Waiting from "../Waiting";
import useSocket from "../../context/SocketContext";

export default function JoinGame() {
    const inputRef = useRef()
    const { setPage } = useData()
    const { socket, setSocket } = useSocket();
    const [isError, setIsError] = useState(false)

    const handelJoinGame = () => {
        const player = {
            avatar: localStorage?.avatar || 'avatar.jpg',
            name: localStorage?.name || 'anonymous',
            id: socket.id
        }

        let code = inputRef.current.value
        if (code.length != 6)
            return
        socket.emit("join-room", code, player);

        socket.on("find-user", (isFind) => {
            if (isFind) setPage(<WaitingJoin />)
            else setIsError(true)
        });
    }



    return (<div className={style.container}>
        <div className={style.BackButton}>
            <SmallButton onClick={() => setPage(<Menu />)} ><PiArrowArcLeft size="40" color="white" /></SmallButton>
        </div>
        <div className={style.introContainer}>
            <div className={style.text}>
                <HeadLine text="JOIN TO A GAME" />
            </div>
            <div className={style.input}>
                <Board>   <input ref={inputRef} type="text" placeholder="enter code game" className={style.inputText} maxLength="6" /></Board>
            </div>
            <div className={style.joinBtn}>
                <Button text="Join" onClick={handelJoinGame} />
            </div>
            <div className={style.boxOr}>
                <div className={style.Line}></div>
                <div className={style.textOr}>
                    <HeadLine text="or" />
                </div>
                <div className={style.Line}></div>
            </div>
            <Button text="CREATE A GAME" onClick={() => setPage(<Waiting />)} />
        </div>
    </div >)
}