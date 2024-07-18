import style from "./style.module.css"
import x from "../../assets/Xplayer.svg"
import o from "../../assets/Oplayer.svg"
import avatar1 from "../../assets/avatar1.svg"
import avatar2 from "../../assets/avatar2.svg"
export default function Player({ img, number, type, name, turn, win, }) {
    return (

        <div className={turn ? style.containerX : style.containerO}>
            <img className={style.img} src={type == 'x' ? avatar1 : avatar2} />
            <div className={style.text}>
                <p>wins:{number}</p>
            </div>
            <div className={style.type}>
                <img className={style.img} src={type == 'x' ? x : o} />
            </div>
            <div className={win ? style.winName : style.name}>
                {win ? <h2>{name} win!!</h2> : <p>{name}</p>}
            </div>
        </div >)

}