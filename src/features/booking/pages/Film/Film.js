import React from "react";
import { NavLink } from "react-router-dom";
import "./Film_Flip.css"
export default function Film(props) {
  console.log("FILM", props.item);
  const { item } = props;
  return (
    <div className="mr-2 h-full bg-withe bg-opacity-75 px-2 pt-5  rounded-lg overflow-hidden text-center relative">
      <div className="overflow-hidden drop-shadow-xl rounded-lg film__card cursor-pointer"
        style={{
          background: `url  (${item.hinhAnh})`,
          backgroundPosition: "center",
          backgroundSize: "100% ",
          backgroundRepeat:'no-repeat',
          position:'relative',
          objectFit:'cover'
        }}
      >
        <img
          src={item.hinhAnh}
          style={{ height: "300px" }}
          className="w-full opacity-1 overflow-hidden"
        />
      </div>
    
      <h1 className="title-font sm:text-md text-lg font-medium text-gray-900 mt-4 h-20 ">
        {item.tenPhim}
      </h1>
      {/* <p className="leading-relaxed mb-3">
        {item.moTa.length > 100 ? (
          <span>{item.moTa.slice(0, 20)}...</span>
        ) : (
          <span>{item.moTa}</span>
        )}
      </p> */}
      <button  href={`/detail/${item.maPhim}`} className="bg-orange-600 py-1.5  block w-full cursor-pointer film_card_btn">
        <NavLink
          to={`/detail/${item.maPhim}`}
          className="text-white film__card-booking font-semibold inline-flex items-center text-lg cursor-pointer"
        >
          ĐẶT VÉ
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </NavLink>
      </button>
    </div>
  );
}
