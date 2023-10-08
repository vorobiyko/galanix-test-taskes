import React, { useState} from "react";
import style from "./Card.module.scss"
import crest from '../icons/icons8-close.svg'
interface WidthProp {
    widthProp: number,
    srcProp: any,
    setIsOpen:  React.Dispatch<React.SetStateAction<boolean>>,
    isOpen: boolean,
    setCurrentSrc: React.Dispatch<React.SetStateAction<null>>,
    countPic:  any
}
const Card = ({widthProp, srcProp, setIsOpen, isOpen , setCurrentSrc,countPic}:WidthProp) => {

    const [isVisible, setIsVisible] = useState('block')


    return(
        <div className={style.card} style={{display: isVisible}}>
            <div className={style.cardContainer} onClick={()=> {
                setIsOpen(!isOpen)
                setCurrentSrc(srcProp)
            }}>
                <img className={`${style.cardContainerImg} card`} src={srcProp} style={{height: widthProp}}  alt="Photo"/>

            </div>
            <div className={style.cardContainerCrest} onClick={()=> {
                setIsVisible('none')
                countPic()

            }}>
                <img className={style.cardContainerCrestImg} src={crest} alt="crest"/>
            </div>
        </div>

    )
}
export default Card