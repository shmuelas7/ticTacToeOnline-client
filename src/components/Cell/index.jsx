import style from "./style.module.css"


export default function Cell({ children }) {
    return <div className={style.container}>{children}</div>
}