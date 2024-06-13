import React from "react";
import "./modal.css"

const Modal = ({ id, header, body, footer,onClose }) => {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="modalContent">
        <div className="header">
          <span onClick={onClose} className="closeModelIcon"> &times; </span>
          <h2>{header ? header : "Header"}</h2>
        </div>
        <div className="body">
          {body ? body : <div>This is our Modal body.</div>}
        </div>
        <div className="footer">{footer ? footer : <h2>Footer</h2> }</div>
      </div>
    </div>
  );
};

export default Modal;
