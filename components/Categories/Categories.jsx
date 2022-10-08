import Link from "next/link";
import React from "react";
import { GrReactjs } from "react-icons/gr";

const Categories = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 text-center align-middle text-muted">
      <Link href="/react">
        <a className="flex flex-col items-center group">
          <GrReactjs size={30} />
          <span className="text-lg text-white hover:font-semibold">React</span>
        </a>
      </Link>
    </div>
  );
};

export default Categories;
