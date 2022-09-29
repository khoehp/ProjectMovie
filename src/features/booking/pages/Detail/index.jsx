import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import { Rate, Spin, Tabs } from "antd";
import Header from "common/components/Header";
import {
  fetchMovieCinemaAction,
  fetchMovieDetailAction,
} from "features/booking/action";
import moment from "moment";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useRouteMatch } from "react-router-dom";
import "./style.css";
function Detail() {
  const [tabPosition, setTabPosition] = useState("left");

  const match = useRouteMatch();
  const dispatch = useDispatch();

  const movieId = match.params.id;
  console.log("121", movieId);
  const selectedMovie = useSelector((state) => {
    return state.booking.selectedMovie;
  });

  const schedule = useSelector((state) => {
    return state.booking.schedule;
  });

  const cinema = useSelector((state) => {
    return state.booking.cinema;
  });
  const fetchMovieDetail = () => {
    dispatch(fetchMovieDetailAction(movieId));
  };

  const fetchMovieCinema = () => {
    dispatch(fetchMovieCinemaAction(movieId));
  };

  useEffect(() => {
    fetchMovieDetail();

    fetchMovieCinema();
  }, []);

  if (!selectedMovie) {
    return <Spin></Spin>;
  }
  return (
    <div>
      <Header />
      <div
        style={{
          backgroundImage: `url(${selectedMovie.hinhAnh})`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          minHeight: "100vh",
        }}
      >
        <CustomCard
          style={{ paddingTop: 150, minHeight: "100vh" }}
          effectColor="#fff" // required
          color="#fff" // default color is white
          blur={10} // default blur value is 10px
          borderRadius={0} // default border radius value is 10px
        >
          <div className="grid grid-cols-12">
            <div className="col-span-5 col-start-3">
              <div className="grid grid-cols-2">
                <img className="rounded-md block" src={selectedMovie.hinhAnh} />
                <div style={{ margin: "auto auto auto 10%" }}>
                  <div>
                    <h1 className="font-semibold text-lg text-white">
                      Ngày chiếu:
                      {moment(selectedMovie.ngayKhoiChieu).format(
                        "DD - MM - YYYY"
                      )}
                    </h1>
                  </div>

                  <h1 className="text-2xl mt-3 font-bold text-white">
                    {" "}
                    {selectedMovie.tenPhim}
                  </h1>

                  <div className="flex justify-between">
                    <button className="bg-orange-400 block py-2 px-7 rounded-md  mt-5">
                      <a
                        href="#booking"
                        className="text-white font-semibold inline-flex items-center text-md cursor-pointer"
                      >
                        ĐẶT VÉ
                      </a>
                    </button>
                    <button className="bg-orange-400 block py-2 px-7 rounded-md  mt-5">
                      <a
                        href="#trainer"
                        className="text-white font-semibold inline-flex items-center text-md cursor-pointer"
                      >
                        TRAILER
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-20 col-span-4">
              <h1
                style={{
                  marginLeft: "26%",
                  color: "yellow",
                  fontWeight: "bold",
                  fontSize: "15",
                }}
              >
                Đánh giá
              </h1>
              <h1
                style={{ marginLeft: "12%" }}
                className="text-green-400 text-2xl"
              >
                <Rate allowHalf value={selectedMovie.danhGia / 2} />
              </h1>
              <div className={`c100 p${selectedMovie.danhGia * 10} big`}>
                <span>{selectedMovie.danhGia * 10}%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="trainer"
            className="c-100 p-50 grid justify-items-center mt-10"
          >
            {selectedMovie.trailer.startsWith("https") && (
              <iframe
                style={{ width: 800, height: 400 }}
                src={selectedMovie.trailer}
                title={selectedMovie.tenPhim}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>

          <div
            id="booking"
            className="w-10/12 mx-auto mt-20 px-5 py-9 rounded-md bg-gray-200"
          >
            <Tabs defaultActiveKey="1" centered>
              <Tabs.TabPane
                tab={
                  <span className=" font-semibold" style={{ fontSize: "23px" }}>
                    Lịch chiếu
                  </span>
                }
                key="1"
              >
                <div className="ant-row">
                  <Tabs tabPosition={tabPosition}>
                    {cinema?.heThongRapChieu.map((htr, index) => {
                      return (
                        <Tabs.TabPane
                          tab={
                            <div>
                              <img
                                src={htr.logo}
                                className="rounder-full"
                                width={50}
                                height={50}
                              />
                              {htr.tenHeThongRap}
                            </div>
                          }
                          key={index}
                        >
                          {htr?.cumRapChieu.map((cumRap, index) => {
                            return (
                              <div key={index}>
                                <div clasName="flex flex-row">
                                  <div>
                                    <img
                                      style={{ width: 60, height: 60 }}
                                      src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png"
                                    />
                                  </div>
                                  <div className="ml-20 ">
                                    <p
                                      style={{
                                        fontSize: 20,
                                        fontWeight: "bold",
                                        lineHeight: 1,
                                      }}
                                    >
                                      {" "}
                                      {cumRap.tenCumRap}
                                    </p>
                                    <p
                                      className="text-gray-200"
                                      style={{ marginTop: 0 }}
                                    >
                                      {cumRap.tenCumRap}
                                    </p>
                                  </div>
                                </div>
                                <div className="thong-tin-lich-chieu grid grid-cols-4">
                                  {cumRap.lichChieuPhim
                                    ?.slice(0, 12)
                                    .map((lichChieu, index) => {
                                      return (
                                        <div className="col-span-1" key={index}>
                                          <a
                                            href={`/movies/${lichChieu.maLichChieu}`}
                                          >
                                            {moment(
                                              lichChieu.ngayChieuGioChieu
                                            ).format("hh:mm A")}
                                          </a>
                                        </div>
                                      );
                                    })}
                                </div>
                              </div>
                            );
                          })}
                        </Tabs.TabPane>
                      );
                    })}
                  </Tabs>
                </div>
              </Tabs.TabPane>
              <Tabs.TabPane
                tab={
                  <span className=" font-semibold" style={{ fontSize: "23px" }}>
                    Thông tin
                  </span>
                }
                key="2"
              >
                <div className="ant-row">
                  <div className="grid grid-cols-7 mx-20">
                    <div className="col-span-2 text-xl text-black">
                      <p className="mb-3 font-semibold">Tên phim</p>
                      <p className="mb-3 font-semibold">Ngày công chiếu</p>
                      <p className="mb-3 font-semibold">Thể loại</p>
                      <p className="mb-3 font-semibold">Diễn viên</p>
                    </div>
                    <div className="col-span-2 text-xl text-black">
                      <p className="mb-3 ">{selectedMovie.tenPhim}</p>
                      <p className="mb-3 ">
                        {moment(selectedMovie.ngayKhoiChieu).format(
                          "DD - MM - YYYY"
                        )}
                      </p>
                      <p className="mb-3 ">Hành động</p>
                      <p className="mb-3 ">Đoán xem</p>
                    </div>
                    <div className=" ml-5 col-span-3">
                      <h3 className="text-2xl text-black font-semibold">
                        Nội dung
                      </h3>
                      <p className="text-lg text-black">{selectedMovie.moTa}</p>
                    </div>
                  </div>
                </div>
              </Tabs.TabPane>
              <Tabs.TabPane
                tab={
                  <span className=" font-semibold" style={{ fontSize: "23px" }}>
                    Đánh giá
                  </span>
                }
                key="3"
              >
                <div className="ant-row"></div>
              </Tabs.TabPane>
            </Tabs>
          </div>
        </CustomCard>
      </div>
    </div>
  );
}

export default Detail;
