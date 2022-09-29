import { Tabs } from 'antd';
import { fetchMovieTheaterAction } from 'features/booking/action';
import moment from 'moment';
import React, { useEffect, useState, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import "./theater.css"
import'animate.css'
function MovieTheater() {
    const [tabPosition, setTabPosition] = useState("left")
    const dispatch = useDispatch()
    const theater = useSelector((state) => {
        console.log(state.booking.theater);
        return state.booking.theater;
    })
    const fetchMovieTheater = () => {
        dispatch(fetchMovieTheaterAction)
    }

    useEffect(() => {
        fetchMovieTheater()
    }, [])

    const renderHeThongRap = () => {
        return theater?.map((item, index) => {
            return (
                <Tabs.TabPane tab={<img style={{ width: 70, marginRight: 20 }} src={item.logo} alt="" />} key={index}>
                    <Tabs tabPosition={tabPosition}>
                        {item?.lstCumRap?.map((cumRap, index) => {
                            return <Tabs.TabPane tab={
                                <div style={{ width: '300px', display: "flex" }}>
                                    <img className="rounder-full" style={{ width: 50, marginRight: 20 }} src={cumRap.hinhAnh} alt="" />
                                    <div className="text-left ml-3">
                                        <h4 className='font-semibold text-green-500'>{cumRap.tenCumRap}</h4>
                                        <p className='text-black'>{cumRap.diaChi}</p>
                                        <p>Chi tiết</p>
                                    </div>
                                </div>
                            } key={index}>
                                {cumRap.danhSachPhim?.slice(0, 5).map((phim, index) => {
                                    return <Fragment key={index}>
                                        <div className="my-5" style={{ display: "flex" }}>
                                            <div  style={{ display: "flex" }}>
                                                <img className='cursor-pointer' style={{ height: 80, width: 50 }} src={phim.hinhAnh} alt={phim.tenPhim} />
                                                <div className="ml-2">
                                                    <h1 className="ml-2 text-2xl text-green-700">{phim.tenPhim}</h1>
                                                
                                                    <div className="grid grid-cols-3 gap-3 ml-2 mt-3">
                                                        {phim.lstLichChieuTheoPhim?.slice(0, 5).map((lichChieu, index) => {
                                                            return <NavLink to={`/movies/${lichChieu.maLichChieu}`} key={index}>
                                                                {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A - DD-MM-YYYY')}
                                                            </NavLink>
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                    </Fragment>

                                })}
                            </Tabs.TabPane>

                        })}
                    </Tabs>
                </Tabs.TabPane>
            )
        })
    }
    return (
        <div id='theater' className='mt-20 w-11/12  mx-auto bg-white px-5 py-5 theater mb-20 animate__backInRight'>
            <Tabs tabPosition={tabPosition}>
                {renderHeThongRap()}
            </Tabs>
        </div>
    )
}

export default MovieTheater