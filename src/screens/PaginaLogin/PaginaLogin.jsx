import React from "react";
import { Component } from "../../components/Component";
import { ComponentWrapper } from "../../components/ComponentWrapper";
import { EsqueceuASenha } from "../../components/EsqueceuASenha";
import { Fundo } from "../../components/Fundo";
import "./style.css";

export const PaginaLogin = () => {
  return (
    <div className="pagina-login">
      <div className="overlap-wrapper">
        <div className="overlap-3">
          <Fundo className="design-component-instance-node" />
          <div className="group">
            <div className="overlap-4">
              <Component className="design-component-instance-node" />
              <ComponentWrapper className="component-12" />
              <EsqueceuASenha className="esqueceu-a-senha-instance" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
