import React from "react";

const tagColor = {
  work: "red",
  hobby: "blue",
  study: "green",
};

const Task = (props) => {
  return (
    <div>
      {props.status.map((el, index) => {
        return (
          <div key={index} className="task">
            <div
              className="tag"
              style={{ backgroundColor: tagColor[el.tag] }}
            ></div>
            <div className="title">{el.title}</div>
            <div className="description">{el.description}</div>
            <div className="date">{el.ddl}</div>
            <div className="action">
              {el.status<2?<div className="action-el" onClick={() => props.nextBtn(el.id)}>next</div>:<></>}
              
              {el.status>0?<div className="action-el" onClick={() => props.prevBtn(el.id)}>prev</div>:<></>}
              
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Task;
