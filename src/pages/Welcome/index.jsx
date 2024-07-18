import style from "./style.module.css";
import X from "../../assets/X.svg"
import o from "../../assets/o.svg"
import X2 from "../../assets/X2.svg"
import o2 from "../../assets/o2.svg"
import Logo from "../../components/Logo";





export default function Welcome() {
    return <div className={style.container}>
        <Logo />
        <img src={X} className={style.Xtop} alt="logo" />
        <img src={o} className={style.Otop} alt="logo" />
        <img src={X2} className={style.XBottom} alt="logo" />
        <img src={o2} className={style.OBottom} alt="logo" />

    </div>
}