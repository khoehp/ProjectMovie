import { Button, Pagination } from "antd";
import { fetchMovieListAction, fetchMoviesAction } from "features/booking/action";
import MovieTheater from "../MovieTheater";

import MovieList from "features/booking/components/MovieList";
import HomeCarousel from "features/booking/components/HomeCarousel"
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Mutipleroll from "../RSlick/Mutipleroll";
import Header from "common/components/Header";
import News from "../News";

function Home() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const movielist = useSelector((state) => {
    return state.booking.movielist
  })

  console.log({ movielist });

  const currentPage = new URLSearchParams(location.search).get("page");

  const [config, setConfig] = useState({
    currentPage: +currentPage || 1,
    pageSize: 8,
    totalCount: 0,
  });

  const [count, setCount] = useState(0);

  const changeTotalCount = (total) => {
    setConfig({ ...config, totalCount: total });
  };

  const fetchMovies = async () => {
    dispatch(fetchMoviesAction(config, changeTotalCount));
  };

  const handleChangePage = (page) => {
    //search params
    history.push(`/?page=${page}&a=1`);
    setConfig({ ...config, currentPage: page });
  };
  const fetchMovieList = () => {
    dispatch(fetchMovieListAction())
  }
  useEffect(() => {
    fetchMovies();
    fetchMovieList();
  }, [config.currentPage]);



  return (
    <div style={{paddingBottom:"100px"}}>
      <Header />
      <HomeCarousel />
    
      <section id="listfilm" className="text-gray-600 body-font">
        <div className="w-11/12 px-5 pt-24 mx-auto">
          <Mutipleroll movielist={movielist} />

        </div>
      </section>

      <MovieTheater />
      <News />
    </div>

  );
}

export default Home;
