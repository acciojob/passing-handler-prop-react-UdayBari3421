import React from "react";

const Selection = (props) => {
  return (
    <div className="fix-box" onClick={(e) => props.applyColor(e.target)}>
      <h2 className="subheading">Selection</h2>
    </div>
  );
};

export default Selection;
