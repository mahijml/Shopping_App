import React, { useEffect, useState } from 'react';
import Products from './products';
import dataSet from './images';
import { FaChevronLeft , FaChevronRight } from 'react-icons/fa';

const Home = () =>{
    const [slideIndex , setSlideIndex] = useState(1);
    const autoScroll = true;
     let timer ;
    const nextSlide = () =>{
        setSlideIndex(slideIndex !== dataSet.length ? slideIndex+1 : 1);
    }
    const prevSlide = () =>{
        setSlideIndex(slideIndex !== 1 ? slideIndex-1 : dataSet.length);
    }
    
    function autoSlide() {
        timer = setInterval(nextSlide , 4000);
    }
    useEffect(()=>{
        setSlideIndex(1);
    },[]);
    useEffect(()=>{
        if(autoScroll){
            autoSlide();
        }

        return()=> clearInterval(timer)
        
    },[slideIndex])
    return(
        <>
        <div className='slider'>
            {dataSet.map((img,index)=>{
                return(
                    <div className='slider_Items ' style={{display : `${slideIndex === index+1 ? "block" : "none"}`}}>
                        <img src={img} />
                    </div>
                )
            })}

            <a className='prev'onClick={prevSlide}>
                <FaChevronLeft/>
                </a>
            <a className='next' onClick={nextSlide}>
                <FaChevronRight/>
                </a>

            <div className='dotsbox'>
                {/* {Array.from({length :3}).map((item,index)=>{
                    
                    <span className={slideIndex === index+1 ? "dot active" : 'dot'} onClick={()=> setSlideIndex(index+1)}></span>
                    
                })} */}
                <span className={slideIndex === 1 ? "dot active" : 'dot'} onClick={()=> setSlideIndex(1)}></span>
                <span className={slideIndex === 2 ? "dot active" : 'dot'} onClick={()=> setSlideIndex(2)}></span>
                <span className={slideIndex === 3 ? "dot active" : 'dot'} onClick={()=> setSlideIndex(3)}></span>
                <span className={slideIndex === 4 ? "dot active" : 'dot'} onClick={()=> setSlideIndex(4)}></span>
            </div>
        </div>
        <Products />
        </>
    )

}

export default  Home;