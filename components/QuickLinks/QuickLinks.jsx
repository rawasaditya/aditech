import Link from "next/link";
import {
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsFillPersonFill,
  BsFillCloudFill,
} from "react-icons/bs";
import { GrReactjs } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
const QuickLinks = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-14 h-0.5 primary-background rounded-md hidden md:block"></div>
      <div className="flex flex-col gap-3">
        <span className="mb-4 text-xs text-center md:mb-0 text-muted md:text-left">
          QUICK LINKS
        </span>
        <div className="flex justify-around gap-2 ml-2 md:justify-end md:flex-col">
          <a
            href="https://instagram.com/aditya.rawas?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-2 cursor-pointer md:flex-row"
          >
            {" "}
            <BsInstagram />{" "}
            <span className="text-xs text-sm md:">Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-rawas-626578149/"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-2 cursor-pointer md:flex-row"
          >
            <BsLinkedin /> <span className="text-xs text-sm md:">Linkedin</span>
          </a>
          <a
            href="https://twitter.com/rawas_aditya"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-2 cursor-pointer md:flex-row"
          >
            <BsTwitter /> <span className="text-xs text-sm md:">Twitter</span>
          </a>
          {/* <Link href="/about">
            <a className="flex flex-col items-center gap-2 cursor-pointer md:flex-row">
              <BsFillPersonFill />{" "}
              <span className="text-xs text-sm md:">About</span>
            </a>
          </Link> */}
        </div>
      </div>
      <div className="h-0.5 primary-background rounded-md block md:hidden my-5"></div>

      <div className="flex flex-col gap-3 md:mt-0">
        <span className="text-xs text-center md:mb-0 text-muted md:text-left">
          TOP CATEGORIES
        </span>
        <div className="flex justify-around gap-2 mb-16 ml-2 md:mb-0 md:justify-end md:flex-col md:pb-0">
          <a className="flex flex-col items-center gap-2 cursor-pointer md:flex-row">
            {" "}
            <GrReactjs /> <span className="text-xs text-sm md:">React</span>
          </a>
          <a className="flex flex-col items-center gap-2 cursor-pointer md:flex-row">
            {" "}
            <IoLogoJavascript />{" "}
            <span className="text-xs text-sm md:">JavaScript</span>
          </a>
          <a className="flex flex-col items-center gap-2 cursor-pointer md:flex-row">
            {" "}
            <BsFillCloudFill /> <span className="text-xs text-sm md:">AWS</span>
          </a>
        </div>
      </div>
      <div className="w-14 h-0.5 primary-background rounded-md hidden md:block"></div>
    </div>
  );
};

export default QuickLinks;
