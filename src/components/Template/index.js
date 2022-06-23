import React from "react";
import "./template.css";

const Template = ({ children }) => {
  return (
    <div className="template">
      <div className="title">Haeun's TODOS</div>
      <div>{children}</div>
    </div>
  );
};

export default Template;
