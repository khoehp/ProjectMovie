import { Col, Row, Spin } from "antd";
import React, { memo } from "react";
import MovieItem from "../MovieItem";
import { useSelector } from "react-redux";

function MovieList() {
  const movieInfo = useSelector((state) => state.booking.movies);

  if (!movieInfo)
    return (
      <span style={{ textAlign: "center" }}>
        <Spin size="large" />
      </span>
    );

  return (
    <div className="container">
      <Row gutter={20}>
        {movieInfo.items.map((item) => {
          return (
            <Col key={item.maPhim} xs={24} sm={12} md={8} lg={6}>
              <MovieItem item={item} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default memo(MovieList);

// virtual DOM
// memo = PureComponent