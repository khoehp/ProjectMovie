import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import "./Loading.css";
function Loading() {
  const IsLoading = useSelector((state) => state.loading.IsLoading);
  return (
    <Fragment>
      {IsLoading ? (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="text-4xl loader"></div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default Loading;
