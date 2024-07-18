import Logo from "../../components/Logo"
import Board from "../../components/Board"
import Text from "../../components/Text"
import style from "./style.module.css"
import avatar1 from "../../assets/avatar1.svg"
import avatar2 from "../../assets/avatar2.svg"
import avatar3 from "../../assets/avatar3.svg"
import SmallButton from "../../components/SmallButton"
import { PiArrowArcLeft } from "react-icons/pi";
import { FaCheck } from "react-icons/fa";
import { useState } from "react"
import useData from "../../context/DataContext";
import Menu from "../Menu"



export default function Setting() {
    let arrImgs = [avatar1, avatar2, avatar3]
    const [name, setName] = useState("")
    const [avatar, setAvatar] = useState(avatar2)
    const [imgs, setImgs] = useState(arrImgs)
    const { setPage } = useData()


    const back = () => {
        setPage(<Menu />)
    }
    const saveProfile = () => {
        localStorage.setItem("avatar", avatar);
        localStorage.setItem("name", name);
        back()
    }
    const chooseAvatar = (v, i) => {
        if (i == 1)
            return
        setAvatar(v)
        let temp = arrImgs[1];
        arrImgs[1] = arrImgs[i]
        arrImgs[i] = temp
        setImgs(arrImgs)
    }
    return (
        <div className={style.container} >
            <div className={style.logo}>
                <Logo />
            </div>
            <div className={style.inputBox}>
                <Board title="YOUR NAME"><input type="text" className={style.input} onChange={(e) => { setName(e.target.value) }} /></Board>
            </div>
            <div className={style.text}>
                <Text text="CHOOSE AVATAR" />
            </div>
            <div className={style.boxImg}  >
                {imgs.map((v, i) => <img src={v} key={i} className={i == 1 ? style.centerImg : style.img} alt="" onClick={() => chooseAvatar(v, i)} />)}
            </div>
            <div className={style.btns}>
                <SmallButton onClick={back}><PiArrowArcLeft size="40" color="white" /></SmallButton>
                <SmallButton onClick={saveProfile}><FaCheck size="40" color="white" /></SmallButton>

            </div>
        </div>)
}