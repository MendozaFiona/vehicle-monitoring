import React from "react";
import { StyledPopup } from "./styled";
import { FaTimes } from "react-icons/fa";

const Popup = ({ content, type, func, setShow }) => {
  return (
    <StyledPopup>
      <div className="overlay">
        <div className={`popup ${type}`}>
          <FaTimes
            className="icon"
            size={30}
            onClick={() => {
              setShow(false);
            }}
          />
          <div className="content">{content}</div>
          {type === "confirm" && (
            <div className="grid">
              <button
                onClick={() => {
                  func();
                }}
              >
                Confirm
              </button>
              <button
                onClick={() => {
                  setShow(false);
                }}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </StyledPopup>
  );
};

export default Popup;
