import logo from "../../assets/Logo.svg"
import style from "./style.module.css"


export default function Logo() {
    return (
        <div className={style.logoContainer}>
            <img src={logo} className={style.logo} alt="logo" />
        </div>
    )
}