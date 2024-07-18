import Cell from "../../components/Cell"
import TitleGame from "../../components/TitleGame"
import Board from "../../components/Board"
import style from "./style.module.css"
import x from "../../assets/Xplayer.svg"
import o from "../../assets/Oplayer.svg"
import Xempty from "../../assets/Xempty.svg"
import Oempty from "../../assets/Oempty.svg"
import Button from "../../components/Button"
import useData from "../../context/DataContext";
import { useEffect, useState } from "react"
import Menu from "../Menu";
import useSocket from "../../context/SocketContext";


export default function BoardWithPlayer() {
    const { socket } = useSocket();
    const { setPage } = useData()
    const [board, setBoard] = useState([])
    const [player1, setPlayer1] = useState({})
    const [player2, setPlayer2] = useState({})
    const [turn, setTurn] = useState("x")
    const [win, setWin] = useState(false)
    const [teko, setTeko] = useState(false)



    useEffect(() => {
        socket.emit("init-game")
        socket.on("init-game", ({ board, player1, player2, turn }) => {
            console.log(board)
            setBoard(board)
            setPlayer1(player1)
            setPlayer2(player2)
            setTurn(turn)
            setWin(false)
            setTeko(false)
        })
    }, [])

    useEffect(() => {
        socket.on("move", (board, turn) => {
            setBoard(board)
            setTurn(turn)

            console.log(win, teko)
        })
        socket.on("win", (win) => {
            console.log(win)
            win.type == "tei" ? setTeko(true) : setWin(win)
        })

    }, [])

    const play = (index) => {
        console.log("play")
        if (!board[index] && !win && !teko) {
            console.log("enter")
            let move = { index: index, id: socket.id }
            socket.emit("move", (move))
        }
    }
    const playAgain = () => {
        socket.emit("start-again")
    }


    return (
        <div className={style.container}>

            <div className={style.TitleGame}>
                <TitleGame
                    player1={player1}
                    player2={player2}
                    turn={turn}
                    win={win}
                />
            </div>
            <div className={style.board}>
                <Board>
                    <div className={style.cell}>
                        {board.map((v, i) => <div key={i} className={style.box} onClick={() => { play(i) }}>
                            <Cell >
                                < img src={v == 'x' ? x : v == 'o' ? o : null} className={style.img} style={win ? { display: "none" } : null} />
                                < img src={v == 'x' && win.type == 'x' ? x : v == 'o' && win.type == 'o' ? o : null} className={style.img} style={!win ? { display: "none" } : null} />
                                < img src={v == 'x' && win.type == 'o' ? Xempty : v == 'o' && win.type == 'x' ? Oempty : null} className={style.img} style={!win ? { display: "none" } : null} />

                            </Cell>
                        </div>
                        )}
                    </div>
                </Board>
            </div>

            {!win && !teko ?
                < div className={style.btn} >
                    <Button text="BACK" onClick={() => setPage(<Menu />)} />
                </div>
                :
                <div className={style.boxBtn}>
                    <div className={style.btnWin}>
                        <Button text="PLAY AGAIN" onClick={() => playAgain()} />
                    </div>
                    <div className={style.btnWin}>
                        <Button text="BACK TO MAIN" onClick={() => setPage(<Menu />)} />
                    </div>
                </div>
            }
        </div >
    )
}