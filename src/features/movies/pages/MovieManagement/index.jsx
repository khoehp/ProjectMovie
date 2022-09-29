import { CHUYEN_TAB, CHANGE_TAB_ACTIVE, DAT_VE, fetchBookingAction, fetchRoomTicketAction } from 'features/movies/action';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useRouteMatch } from 'react-router-dom';
import styles from "./style.module.css";
import "./MovieManagement.css"
import { CloseOutlined } from '@ant-design/icons';
import { ThongTinDatVe } from '_core/module/ThongTinDatVe';
import Signin from 'features/authentication/pages/Signin';
import { Tabs } from 'antd';
import { fetchProfileAction } from 'features/authentication/action';
import moment from 'moment';
import _ from "lodash"

function MovieManagement(props) {


    const match = useRouteMatch();
    const dispatch = useDispatch();

    const fetchRoomTicket = () => {
        dispatch(fetchRoomTicketAction(maLichChieu))
    }
    useEffect(() => {
        fetchRoomTicket();
    }, [])


    const maLichChieu = match.params.id;

    const userLogin = useSelector(state => state.auth.profile)

    const ticketroom = useSelector((state) => state.movies.ticketroom);
    const danhSachGheDangDat = useSelector((state) => state.movies.danhSachGheDangDat);

    console.log(danhSachGheDangDat);
    // if (!localStorage.getItem(Signin)) {
    //     return <Redirect to='/signin' />
    // }

    console.log(ticketroom);
    const movieInfo = ticketroom?.thongTinPhim;
    const listSeat = ticketroom?.danhSachGhe;


    const renderGhe = () => {
        return listSeat?.map((ghe, index) => {

            let classGheVip = ghe.loaiGhe === "Vip" ? 'gheVip' : '';
            let classGheDaDat = ghe.daDat === true ? "gheDaDat" : "";
            let classGheDangDat = "";
            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)
            let classGheDaDuocDat = "";
            if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
                classGheDaDat = 'gheDaDuocDat';
            }

            if (indexGheDD != -1) {
                classGheDangDat = "gheDangDat"
            }
            return (<Fragment key={index}>
                <button onClick={() => {

                    dispatch({
                        type: DAT_VE,
                        gheDuocChon: ghe
                    })
                }} disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat}, ${classGheDangDat}  ${classGheDaDuocDat}text-center`} key={index}>
                    {ghe.daDat ? <CloseOutlined /> : ghe.stt}
                </button>

                {(index + 1) % 16 === 0 ? <br /> : ''}
            </Fragment>

            )
        })
    }
    return (

        <div className='mt-5  min-h-screen' >
            <div className='grid grid-cols-12 bg-gray-200'>
                <div className='col-span-9'>
                    <div className='flex flex-col items-center mt-5'>
                        <div className='bg-black' style={{ width: '80%', height: 15 }}>

                        </div>
                        <div className={`${styles['trapezoid']} text-center `}>
                            <h3 className='text-lg text-center font-semibold text-white my-1'>Màn hình</h3>
                        </div>
                        <div className='mt-5'>
                            {renderGhe()}
                        </div>
                    </div>
                    <div className='mt-5 flex justify-center'>
                        <table className='w-2/3 divide-y divide-gray-300 '>
                            <thead className='p-5'>
                                <tr>
                                    <th>Ghế Vip</th>
                                    <th>Ghế Thường</th>
                                    <th>Ghê Đang Đặt</th>
                                    <th>Ghê Đã Đặt</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-gray-300 '>
                                <tr className='text-center'>
                                    <td><button className='ghe gheVip '>00</button></td>
                                    <td><button className='ghe '>00</button></td>
                                    <td><button className='ghe gheDangDat'>00</button></td>
                                    <td><button className='ghe gheDuocDat'>X</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className='col-span-3 mt-5'>
                    <h3 className='text-green-400 text-center text-4xl'>{danhSachGheDangDat?.reduce((tongTien, ghe, index) => {
                        return tongTien += ghe.giaVe
                    }, 0).toLocaleString()}</h3>
                    <hr />
                    <h3 className='text-2xl text-red-600 font-semibold mb-2'>{movieInfo?.tenPhim}</h3>
                    <p className='my-1 text-base font-semibold'>Địa điểm: {movieInfo?.tenCumRap} - {movieInfo?.tenRap}</p>
                    <p className='my-1 text-base font-semibold'>Ngày chiếu: {movieInfo?.ngayChieu} - {movieInfo?.gioChieu}</p>
                    <hr />
                    <div className='flex flex-row my-5'>
                        <div className='w-4/5'>
                            <span className='text-red-600 text-base'>Ghế      </span>
                            {danhSachGheDangDat?.map((gheDD, index) => {
                                return <span key={index} className="text-green-500 text-xl">{gheDD.stt}</span>
                            })}
                        </div>
                        <div className='text-righr '>
                            <span className='text-base text-green-800'>
                                {danhSachGheDangDat?.reduce((tongTien, ghe, index) => {
                                    return tongTien += ghe.giaVe
                                }, 0).toLocaleString()}
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className='my-5'>
                        <i className='my-1 text-lg font-semibold'>Email</i> <br />
                        {userLogin?.email}
                    </div>
                    <hr />
                    <div className='my-5'>
                        <i className='my-1 text-lg font-semibold'>Phone</i> <br />
                        {userLogin?.soDT}
                    </div>
                    <hr />
                    <div className='mb-0 h-full flex flex-col items-center' style={{ marginBottom: 0 ,paddingRight:'30px'}}>
                        <div onClick={() => {
                            const thongTinDatVe = new ThongTinDatVe();

                            thongTinDatVe.maLichChieu = +maLichChieu;
                            thongTinDatVe.danhSachVe = danhSachGheDangDat.map(item => {
                                return {
                                    maGhe: item.maGhe,
                                    giaVe: item.giaVe
                                }
                            });

                            dispatch(fetchBookingAction(thongTinDatVe));
                        }} className='bg-green-500 text-white w-full text-center py-3 font-boild cursor-pointer font-semibold items-center  text-lg cursor-pointer' >
                            ĐẶT VÉ
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}



function KetQuaDatVe(props) {

    const thongTinNguoiDung = useSelector((State) => State.auth.profile
    )
    console.log(thongTinNguoiDung);

    const renderTicketItem = function () {
        return thongTinNguoiDung.thongTinDatVe?.map((ticket, index) => {
            const seats = _.first(ticket?.danhSachGhe);
            return <div className="py-8 flex flex-wrap md:flex-nowrap bg-gray-200" key={index}>
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col items-center">
                    <img className='w-24 h-30 marker:first-line:object-cover' src={ticket?.hinhAnh} />
                </div>
                <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{ticket?.tenPhim}</h2>
                    <p className="leading-relaxed " >Thời lượng phim: ( {ticket?.thoiLuongPhim} Phút)</p>
                    <p className="leading-relaxed text-lg text-gray-900">Ngày đặt: {moment(ticket?.ngayDat).format('hh:mm A - DD-MM-YYYY')}</p>
                    <p className="leading-relaxed text-lg text-gray-900">Địa Điểm: {seats.tenHeThongRap} - {seats.maCumRap} </p>
                    <p className="leading-relaxed text-lg text-gray-900">Ghế số:{ticket.danhSachGhe?.map((ghe, index) => {
                        return <span className='ml-2 mb-1 w-10 h-7 leading-7 bg-gray-600 text-white text-lg rounded-md text-center inline-block' key={index}>{ghe?.tenGhe}</span>
                    })} </p>
                </div>
            </div>
        })
    }

    return <div className='p-5'>
        <section className="text-gray-600 body-font overflow-hidden ">
            <div className="container px-5 py-24 mx-auto">
                <div className='flex flex-col text-center mb-20 w-full'>
                    <h1 className=' text-white w-full text-center py-3 font-semibold cursor-pointer font-semibold items-center  text-4xl cursor-pointer   '>Kết quả đặt vé</h1>
                    <p className='text-white w-full text-center py-3 font-semibold cursor-pointer font-semibold items-center   text-lg cursor-pointer'>Hãy xem thông tin địa chỉ vơi thời gian, chúc bạn xem phim vui vẻ </p>
                </div>
                <div className="-my-8 divide-y-2 divide-gray-100 w-11/12">
                    {renderTicketItem()}

                </div>
            </div>
        </section>

    </div>
}




export default function (props) {
    const tabActive = useSelector(state => state.movies.tabActive);
    const dispatch = useDispatch();
    return <div className='p-5 bg-zinc-800 pb-24'>
        <Tabs centered defaultActiveKey='1' activeKey={tabActive} onChange={(key) => {
            console.log("12",key)
            dispatch({
                type: 'CHANGE_TAB_ACTIVE',
                number: key.toString()
            })
        }}>
            <Tabs.TabPane tab={<span className='text-lg text-white font-semibold'>01 CHỌN GHẾ & THANH TOÁN</span>} key="1" >
                < MovieManagement {...props} />
            </Tabs.TabPane>
            <Tabs.TabPane tab={<span className='text-lg text-white font-semibold'>02 KẾT QUẢ ĐẶT VÉ</span>} key="2" >
                <KetQuaDatVe {...props} />
            </Tabs.TabPane>
        </Tabs>
    </div>
}
