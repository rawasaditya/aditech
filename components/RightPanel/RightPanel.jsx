import React from "react";
import Categories from "../Categories/Categories";
import ChapterCards from "../ChapterCards/ChapterCards";
const RightPanel = () => {
  return (
    <div>
<div>
<div className="mb-[29px]">
        <h2 className="mb-1 text-3xl font-semibold md:text-5xl">
          Categories
        </h2>
        <span className="text-sm text-muted md:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </span>
      </div>
      <div className="grid items-center grid-cols-4 lg:grid-cols-4">
        <Categories />
        <Categories />
        <Categories />
        <Categories />
      </div>

</div>
<div className="flex justify-center item-center">
<hr className="my-6 text-red-500 border-t border-indigo-400 opacity-30 md:w-1/4 md:my-12"/>
</div>
      <div className="mb-[29px]">
        <h2 className="mb-1 text-3xl font-semibold md:text-5xl">
          Latest Learnings
        </h2>
        <span className="text-sm text-muted md:text-lg">
          Stay up to date with the ever topics by reading articles.
        </span>
      </div>
      <div className="grid items-center grid-cols-2 gap-5 lg:grid-cols-3">
        <ChapterCards />
        <ChapterCards />
        <ChapterCards />
        <ChapterCards />
        <ChapterCards />
        <ChapterCards />
      </div>
    </div>
  );
};

export default RightPanel;
