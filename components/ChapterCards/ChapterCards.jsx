import React from "react";
import Link from "next/link";

const ChapterCards = () => {
  return (
    <Link href="/lesson/chapter">
      <a>
        <div className="items-center w-full rounded-none cursor-pointer group">
          <figure>
            <img
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
              className="group-hover:scale-105"
            />
          </figure>
          <div className="px-0 py-3">
            <h2 className="object-contain text-sm font-semibold duration-300 ease-in hover:object-scale-down">
              AWS This Week #530 - Amazon Fraud D .....
            </h2>
            <div className="flex flex-col">
              <span className="text-sm font-light">React This week</span>
              <span className="text-xs font-light text-muted">
                Added 2 days ago
              </span>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ChapterCards;
