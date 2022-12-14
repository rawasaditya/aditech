import React, {useState} from "react";
import { AiOutlineCheck } from "react-icons/ai";
const ErrorAlert = ({ message, display }) => {
  const [state, setstate] = useState(display);
  return (
    <div className={`${state ? "absolute" : "hidden"} min-w-[50%] top-1 right-1`}>
      <div className={`shadow-lg alert alert-success`}>
        <div>
          <AiOutlineCheck size={20} />
          <span>{message}</span>
        </div>
        <div className="flex-none">
          <button className="btn btn-sm btn-ghost" onClick={()=>setstate(prev=>!prev)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default ErrorAlert;
