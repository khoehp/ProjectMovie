import { Card } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

const { Meta } = Card;

function MovieItem(props) {
  const { tenPhim, hinhAnh, moTa, maPhim } = props.item;
  const history = useHistory();

  const goToDetail = () => {
    history.push("/detail/" + maPhim);
    // history.replace("/detail");
  };

  return (
    <Card
      onClick={goToDetail}
      hoverable
      cover={
        <img
          alt="example"
          src={hinhAnh}
          style={{
            height: 300,
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
      }
    >
      <Meta title={tenPhim} description={moTa.substr(0, 100) + "..."} />
    </Card>
  );
}

export default MovieItem;
