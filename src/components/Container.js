import React from "react";
import Task from "./Task";

const Container = (props) => {
  return (
    <div className="ctnelem">
      {props.name}
      <div>
        <Task status={props.status} nextBtn={props.nextBtn} prevBtn={props.prevBtn}  />
      </div>
    </div>
  );
};

export default Container;
