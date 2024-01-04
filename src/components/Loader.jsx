import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="absolute top-72 left-24">
      <CirclesWithBar
        height="150"
        width="150"
        color="#8baa36"
        outerCircleColor="#8baa36"
        innerCircleColor="#8baa36"
        barColor="#8baa36"
        ariaLabel="circles-with-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
