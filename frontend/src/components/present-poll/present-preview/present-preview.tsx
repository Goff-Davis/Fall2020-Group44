import React, { ReactElement, useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "../../../store";
import "./present-preview.scss";

const PresentPreview = (): ReactElement => {
  const global = useContext(store) as any;
  const state = global.state;

  return (
    <div className="present-preview">
      <img className="present-preview-logo" src="/img/logo.svg" />
      <h2>{state.poll[0] ? state.poll[0].title : ""}</h2>
      <button className="start-button">
        <Link to="/poll/display">Start Poll &gt;</Link>
      </button>
      <button
        className="skip-button"
        onClick={() => console.log("to be removed????")}
      >
        {"Skip to Next Poll >>"}
      </button>
      <p className="helper-text">
        Click Start Poll to begin collecting responses
      </p>
    </div>
  );
};

export default PresentPreview;