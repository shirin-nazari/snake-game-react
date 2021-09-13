import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const style = {
    left: `${props.dot[0]}%`,
    top: `${props.dot[1]}%`,
  };
  return <div className="snake-food" style={style}></div>;
};
