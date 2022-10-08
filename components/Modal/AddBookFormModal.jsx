import React, { useState } from "react";
import AddBookForm from "../Admin/AddBookForm/AddBookForm";
const Modal = ({ open, setOpen, setlistofbooks }) => {


  return (
    <>
      <input
        type="checkbox"
        defaultChecked={open}
        id="my-modal-3"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="relative text-black modal-box">
          <label
            htmlFor="my-modal-3"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Enter Details of book!</h3>
         <AddBookForm 
         setOpen={setOpen}
         setlistofbooks={setlistofbooks}
         />
        </div>
      </div>
    </>
  );
};

export default Modal;
