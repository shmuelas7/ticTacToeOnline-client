
import Logo from "../../components/Logo"
import Button from "../../components/Button"
import style from "./style.module.css"
import { IoSettingsOutline } from "react-icons/io5";
import SmallButton from "../../components/SmallButton"
import useData from "../../context/DataContext";
import Setting from "../Setting";
import JoinGame from "../JoinGame";
import ChoosePlayer from "../ChoosePlayer"


export default function Menu() {
    const { setPage } = useData()

    return (
        <div className={style.container} >
            <div className={style.logoContainer}>
                <Logo />
            </div>
            <div className={style.btnContainer}>
                <Button text="PLAY SOLO" onClick={() => setPage(<ChoosePlayer />)} />
                <Button text="PLAY WITH A FRIEND" onClick={() => setPage(<JoinGame />)} />
            </div>
            <div className={style.settingBtn}>
                <div className={style.btn} onClick={() => { setPage(<Setting />) }}>
                    <SmallButton > <IoSettingsOutline size="40" color="#B28100" /></SmallButton>
                </div>
            </div>

        </div>)
}