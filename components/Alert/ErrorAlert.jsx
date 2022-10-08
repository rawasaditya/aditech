import React, { useState } from "react";
import { BiErrorCircle } from "react-icons/bi";
const ErrorAlert = ({ message, display }) => {
  const [state, setstate] = useState(display);
  return (
    <div
      className={`${state ? "absolute" : "hidden"} min-w-[50%] top-1 right-1`}
    >
      <div className={`shadow-lg alert alert-error`}>
        <div>
          <BiErrorCircle size={20} />
          <span>{message}</span>
        </div>
        <div class="flex-none">
          <button
            class="btn btn-sm btn-ghost"
            onClick={() => setstate((prev) => !prev)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorAlert;
