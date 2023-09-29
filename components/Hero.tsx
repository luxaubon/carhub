'use client';

import Image from "next/image"
import { CustomButton } from "@/components"

const Hero = () => {
    const handleScroll =() => {

    }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">

            <h1 className="hero__title">
                ค้นหา รถ ที่คุณต้องการด้วย คาฮับ คล้ายๆ พรฮับ 5555
            </h1>
            <p className="hero__subtitle">
                ไอ้เราก็ว่างซะด้วย ที่นี้ก็ว้าวุ่นเลย
            </p>

            <CustomButton 
                title="กดบ่ได้"
                btnType='button'
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick={handleScroll}
            /> 

            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero" fill className="object-contain" />
                </div>
                <div className="hero__image-overlay" />
            </div>
               
        </div>
    </div>
  )
}

export default Hero