import React from 'react'
import  './Hero.css'
import img1 from '../assets/images/1.jpeg'
import img2 from '../assets/images/2.jpeg'
import img3 from '../assets/images/3.jpeg'
import img4 from '../assets/images/4.jpeg'
import img5 from '../assets/images/5.jpeg'
import img6 from '../assets/images/6.jpeg'
import img7 from '../assets/images/7.jpeg'
import img8 from '../assets/images/8.jpeg'
import img9 from '../assets/images/9.jpeg'
import img10 from '../assets/images/10.jpeg'
import img11 from '../assets/images/11.jpeg'
import img12 from '../assets/images/12.jpeg'
import img13 from '../assets/images/13.jpeg'
import img14 from '../assets/images/14.jpeg'
import img15 from '../assets/images/15.jpeg'
import img16 from '../assets/images/16.jpeg'
import img17 from '../assets/images/17.jpeg'
import img18 from '../assets/images/18.jpeg'

const Hero = () => {
    return (
        <div className='h-max relative p-10 gap-20 flex flex-col '>
                <h1 className="font1 hero__title">
                   Competition's Memories
                </h1>
                <div className="hero__images">
                    <img src={img1}  />
                    <img src={img2} />
                    <img src={img3}  />
                    <img src={img4}  />
                    <img src={img5}  />
                    <img src={img6}  />
                    <img src={img7}  />
                    <img src={img8}  />
                    <img src={img9}  />
                    <img src={img10}  />
                    <img src={img11}  />
                    <img src={img12}  />
                    <img src={img13}  />
                    <img src={img14}  />
                    <img src={img15}  />
                    <img src={img16}  />
                    <img src={img17}  />
                    <img src={img18}  />
                </div>
        </div>
    )
}

export default Hero
