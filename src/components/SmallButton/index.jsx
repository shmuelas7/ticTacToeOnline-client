import style from "./style.module.css"
export default function SmallButton({ children, onClick }) {
    return (
        <div className={style.container}>
            <button className={style.btn} onClick={onClick}>
                {children}
            </button>
        </div>)
}