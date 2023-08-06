import { FaGithub, FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  return (
    <div>
      {/* menu */}
      <div className=" w-full h-[80px] flex justify-evenly items-center  px-4  bg-emerald-500">
        <ul className=" flex h-full  items-center">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>CV</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* social */}
      <div className=" flex fixed flex-col left-0 top-[40%]">
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
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
