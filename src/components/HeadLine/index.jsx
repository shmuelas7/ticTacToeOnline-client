import style from "./style.module.css"

export default function HeadLine({ text }) {
    return (
        <div>
            <h2 className={style.text}>{text}</h2>
        </div>)
}