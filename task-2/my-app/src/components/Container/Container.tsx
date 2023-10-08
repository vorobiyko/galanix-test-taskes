import React, {useEffect, useState} from "react";
import style from './Container.module.scss'
import Card from "../Card/Card";
import img1 from '../../img/1.jpg'
import img2 from '../../img/2.jpg'
import img3 from '../../img/3.jpg'
import img4 from '../../img/4.jpg'
import img5 from '../../img/5.jpg'
import img6 from '../../img/6.jpg'
import img7 from '../../img/7.jpg'
import img8 from '../../img/8.jpg'
import img9 from '../../img/9.jpg'
import img10 from '../../img/10.jpg'
import img11 from '../../img/11.jpg'
import img12 from '../../img/12.jpg'
import BigPhoto from "../BigPhoto/BigPhoto";
import crest from "../icons/icons8-close.svg";

const imgList:typeof Image[] = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12]
const Container = () => {
    const [width, setWidth] = useState(0)
    useEffect(()=>{
        const handleResize = () => {
            const widthCard = document.querySelectorAll('.card')[0].clientWidth;
            setWidth(widthCard);
        };
        console.log("resize")
        handleResize(); // Вызываем функцию при первоначальной загрузке компонента

        window.addEventListener('resize', handleResize); // Добавляем слушатель события resize

        // Удаляем слушатель события при размонтировании компонента
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[])

    const [count, setCount] = useState(imgList.length)

    const countPic = () => {
        setCount(count-1)
        console.log(count)
    }

    const getCurrentDateTime = () => {
        const currentDate = new Date();


        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();
        const hours = String(currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');

        const formattedDateTime = `${day}.${month}.${year} ${hours}:${minutes}`;
        return formattedDateTime;
    }

    const [isOpen, setIsOpen] = useState(false)
    const [currentSrc, setCurrentSrc] = useState(null)

    return(
        <>
            <h2>Number of pictures: {count}</h2>
            <h2>{getCurrentDateTime()}</h2>
            <div className={style.grid}>
                {imgList.map((el, i) => (
                    <Card widthProp={width} srcProp={el} setIsOpen={setIsOpen} isOpen={isOpen}
                          setCurrentSrc={setCurrentSrc} countPic={countPic} key={`${i}`} />

                ))}
            </div>
            {(isOpen) ? <BigPhoto srcProp={currentSrc} isOpen={isOpen} setIsOpen={setIsOpen}/>:''}
        </>

  )
}
export default Container