
import style from "./style.module.css"

export default function TextInpot({ placeHolder, text }) {
    return (<>

        <input type="text" placeholder={placeHolder} className={style.input} />

    </>)
}