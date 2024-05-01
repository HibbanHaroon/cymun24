import React from "react";

const CommitteeImageCard = (props) => {
  return (
    <div className="flex flex-col justify-end align-center w-32 h-28 rounded-lg backdrop-blur bg-primary-light transition-all hover:shadow-xl hover:shadow-primary-light hover:scale-110">
      <img
        src={props.image}
        alt={props.title}
        style={{
          position: "absolute",
          top: props.top,
          left: props.left,
          width: props.width,
          height: props.height,
        }}
      />
      <div className="w-full h-2/5 flex flex-col justify-center items-center bg-white rounded-b-lg">
        <p className="font-montserrat text-primary text-sm font-semibold">
          {props.title}
        </p>
      </div>
    </div>
  );
};

export default CommitteeImageCard;
