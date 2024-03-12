import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-scroll";
import cv from "../assets/Eslam_Mahmoud_CV.pdf";
const Navbar = () => {
  return (
    <div>
      {/* menu */}
      <div className=" w-full h-[80px] flex justify-evenly items-center  px-4  bg-emerald-500">
        <ul className=" flex h-full  items-center">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <a href={cv} download="cv" target="_blank" rel="noreferrer">
              CV
            </a>
          </li>
        </ul>
      </div>

      {/* social */}
      <div className=" flex fixed flex-col left-0 top-[35%]">
        <ul>
          <li className=" w-[160px] h-[60px]  ml-[-95px] hover:ml-[-15px] duration-300">
            <a
              className="flex justify-between items-center w-full h-full px-4 bg-emerald-500 text-white rounded-full"
              href="https://www.linkedin.com/in/eslam-mahmoud-16a5b7250/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className=" w-[160px] h-[60px] ml-[-95px] hover:ml-[-15px] duration-300">
            <a
              className="flex justify-between items-center w-full h-full px-4 bg-emerald-500 text-white rounded-full"
              href="https://github.com/EslamMahmoud1"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className=" w-[160px] h-[60px]  ml-[-95px] hover:ml-[-15px] duration-300">
            <a
              className="flex justify-between items-center w-full h-full px-4 bg-emerald-500 text-white rounded-full"
              href="mailto:eslam.mahmoud.hanafy@gmail.com"
            >
              Gmail <BiLogoGmail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
