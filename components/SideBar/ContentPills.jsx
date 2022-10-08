import React, { useState } from "react";
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'
const ContentPills = ({collapsed, chapterCounts, title,chapters,lesson,key}) => {
  const [state, setState] = useState(collapsed);
  return (
    <li className="border-b " key={key}>
      <button
      key={key}
        type="button"
        onClick={() => setState((prev) => !prev)}
        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg collapse-title group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      >
        <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-sm text-white align-middle transition duration-75 bg-gray-500 rounded-xl">
          {chapterCounts}
        </span>
        <span
          className="flex-1 ml-3 text-left whitespace-nowrap"
          sidebar-toggle-item=""
        >
          {title}
        </span>
        {
            state ? <BsChevronUp /> : <BsChevronDown /> 
        }
       
      </button>
      <ul
        className={`${
          state ? "" : "hidden"
        } py-2 space-y-2 transition duration-300  ease-in-out`}
        key={3}
      >
        {
          chapters.length && (
            chapters.map((i,idx)=>{
              return(<li key={idx}>
                <a
                  href={`/${lesson}/${i.slug}`}
                  className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  key={idx}
                >
                  {i.title}
                </a>
              </li>)
            })
          )
        }

      </ul>
    </li>
  );
};

export default ContentPills;
