import style from "./style.module.css"



export default function Text({ text }) {
    return <h2 className={style.text}>{text}</h2>
}