import { useState, useEffect } from "react";
import Greetings from "../components/Greetings/Greetings";
import QuickLinks from "../components/QuickLinks/QuickLinks";
import RightPanel from "../components/RightPanel/RightPanel";



export default function Home() {
  return (
    <>
      <div className="container px-4 mx-auto mt-20">
        <div className="flex flex-col gap-16 lg:flex-row">
          <div className="order-2 md:order-1">
            <div className="mb-[29px] md:block hidden">
              <Greetings />
            </div>
            <div>
              <QuickLinks />
            </div>
          </div>
          <div className="flex-1 order-1 md:order-2">
            <RightPanel />
          </div>
        </div>
      </div>
    </>
  );
}
