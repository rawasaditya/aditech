import moment from "moment/moment";
import React from "react";

const ListCards = ({ props }) => {
  return (
    <li className="flex items-center justify-start h-auto gap-2 p-0 text-black align-middle overflow-clip btn bg-base-100 hover:text-white">
      <figure>
        <img src={`/${props.thumbnail}`} className="w-12" alt="Album" />
      </figure>
      <div className="flex flex-col items-start">
        <span className="p-0 text-sm ">{props.title}</span>
        <span className="text-xs text-gray-500">{moment(props.createdAt).format("DD, MMM YYYY")}</span>
      </div>
    </li>
  );
};

export default ListCards;
