import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupConfirm(props) {
  return (
    <PopupWithForm
      name="delete-card"
      title={props.title}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={props.onSubmit}
    >
      <button
        type="submit"
        className="popup__delete-button"
      >
        {props.buttonText}
      </button>
    </PopupWithForm>
  );
}

export default PopupConfirm;
