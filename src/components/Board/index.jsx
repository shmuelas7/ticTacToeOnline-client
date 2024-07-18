import style from "./style.module.css"


export default function board({ children, title }) {
    return (
        <div className={style.container}>
            <div className={title ? style.boxTitle : style.hide}><p>{title}</p></div>
            {children}
        </div>
    )
}