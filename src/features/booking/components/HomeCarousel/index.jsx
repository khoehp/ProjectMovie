import React from 'react'
import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchMovieCarouselAction } from 'features/booking/action';
import "./HomeCarousel.css";
import "animate.css"
const contentStyle = {
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    backgroundPosition: 'center',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat'
};

function HomeCarousel() {
    const dispatch = useDispatch()

    const carousel = useSelector((state) => {
        return state.booking.carousell;
    })
    useEffect(() => {
        dispatch(fetchMovieCarouselAction)
    }, [])

    const renderImg = () => {
        return carousel?.map((item, index) => {
            return <div key={index}>
                <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }} >
                    <img className='w-full opancity-0 ' src={item.hinhAnh} />
                </div>
            </div>


        })
    }
    return (
        <Carousel className='animate__bounceInDown'  effect="fade" style={{ position: "relative", zIndex: 1,paddingTop:'60px' }}>
            {renderImg()}

        </Carousel>
    )
}

export default HomeCarousel;