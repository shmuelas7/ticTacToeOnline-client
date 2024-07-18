import style from "./style.module.css";
import { useState } from "react";

export default function Button({ text, onClick }) {
    return (
        <>
            <button type="button" className={style.btn} onClick={onClick}><h2>{text}</h2></button >
        </>
    )

}