import React, { useState } from "react";
import Modal from "./Modal";

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(true);
  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }
  function onClose() {
    setShowModalPopup(false);
  }
  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && <Modal onClose={onClose} body={<div>This is customised body</div>} />}
    </div>
  );
};

export default ModalTest;
