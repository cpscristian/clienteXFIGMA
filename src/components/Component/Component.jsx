import React from "react";
import "./style.css";

export const Component = ({ className }) => {
  return (
    <div className={`component ${className}`}>
      <div className="overlap-group">
        <div className="overlap">
          <img
            className="line"
            alt="Line"
            src="https://c.animaapp.com/bwFxtVDo/img/line-1-1.svg"
          />
          <input className="input" type="email" placeholder="E-mail" />
        </div>
        <div className="text-wrapper-2">Login</div>
        <div className="overlap-2">
          <input className="input" type="password" placeholder="Senha" />
          <img
            className="line"
            alt="Line"
            src="https://c.animaapp.com/bwFxtVDo/img/line-1-1.svg"
          />
        </div>
      </div>
    </div>
  );
};
