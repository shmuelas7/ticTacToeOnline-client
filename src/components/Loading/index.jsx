import style from "./style.module.css"


export default function Loading() {
    return (<div className={style.floatingCirclesG}>
        <div className={style.f_circleG} id={style.frotateG_01}></div>
        <div className={style.f_circleG} id={style.frotateG_02}></div>
        <div className={style.f_circleG} id={style.frotateG_03}></div>
        <div className={style.f_circleG} id={style.frotateG_04}></div>
        <div className={style.f_circleG} id={style.frotateG_05}></div>
        <div className={style.f_circleG} id={style.frotateG_06}></div>
        <div className={style.f_circleG} id={style.frotateG_07}></div>
        <div className={style.f_circleG} id={style.frotateG_08}></div>
    </div>)
}