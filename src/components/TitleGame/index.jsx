import Player from "../Player"
import style from "./style.module.css"

export default function TitleGame({ player1, player2, turn, win }) {
    console.log("player1", player1)
    console.log("player2", player2)
    let winPlayer;
    if (win) {
        win.id == player1.id ? winPlayer = player1 : winPlayer = player2;
    }
    return (
        <div className={style.container}>
            <div className={style.IntroContainer}>
                {win ? <Player
                    img={winPlayer.img}
                    turn={true}
                    type={winPlayer.type}
                    name={winPlayer.name}
                    number={winPlayer.win}
                    win={true} /> :
                    <div className={style.players}>
                        <Player
                            img={player1.img}
                            turn={turn.id == player1.id ? true : false}
                            type={player1.type}
                            name={player1.name}
                            number={player1.win}
                            win={false} />
                        <Player
                            img={player2.img}
                            turn={turn.id == player2.id ? true : false}
                            type={player2.type}
                            name={player2.name}
                            number={player2.win}
                            win={false} />
                    </div>
                }
            </div >
        </div >)
}