import React from "react";
import { StyledPopup } from "./styled";

const Popup = ({ textContent, func, setShow }) => {
  return (
    <StyledPopup>
      <div className="overlay">
        <div className="popup">
          <div className="content">{textContent}</div>
          <div className="grid">
            <button
              onClick={() => {
                func();
              }}
            >
              YES
            </button>
            <button
              onClick={() => {
                setShow(false);
              }}
            >
              NO
            </button>
          </div>
        </div>
      </div>
    </StyledPopup>
  );
};

export default Popup;
