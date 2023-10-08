import React from "react";
import style from './BigPhoto.module.scss'
interface BigPhoto{
    srcProp: any,
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const BigPhoto = ({srcProp ,isOpen, setIsOpen }:BigPhoto) => {
    return(
        <div className={style.background}>
            <img className={style.backgroundImg} src={srcProp} alt="big"/>
            <div className={style.backgroundBtn} onClick={()=>setIsOpen(!isOpen)}><h1>Close</h1></div>
        </div>
    )
}
export default BigPhoto