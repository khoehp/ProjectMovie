import Slider from "react-slick";
import styles from "./Mutipleroll.module.css";
import React from "react";
import Film from "../Film/Film";
import Film_Flip from "../Film/Film_Flip";
import { useDispatch } from "react-redux";
import { SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU } from "./../../action";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles["slick-prev"]}`}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles["slick-prev"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const Mutipleroll = (props) => {
  const dispatch = useDispatch();

  const lstFilmRSlick = props.movielist;
  const renderFilms = () => {
    return lstFilmRSlick?.slice(0, 12).map((item, index) => {
      return (
        <div className={`${styles["width-item"]}`} key={index}>
          <Film item={item} />
        </div>
      );
    });
  };

  console.log("DATA: ", lstFilmRSlick);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 600,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div >
      <Slider {...settings}>{renderFilms()}</Slider>
    </div>
  );
};

export default Mutipleroll;
