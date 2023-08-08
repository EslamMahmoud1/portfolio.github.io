import c from "../assets/c-.png";
import git from "../assets/github.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
const Skills = () => {
  return (
    <div name="skills" className="h-screen w-full bg-[#0a192f]">
      <div className="flex flex-col justify-center max-w-[1000px] mx-[200px] p-8 w-full">
        <div>
          <p className=" text-4xl font-bold border-b-2 inline border-emerald-500 text-gray-400">
            Skills
          </p>
        </div>
        <div className=" w-full grid grid-cols-2 gap-8 text-center py-12 ">
          <div className="shadow-md shadow-emerald-500 hover:scale-110 duration-300">
            <img className="w-[100px] mx-auto" src={c} alt="c/c++" />
            <p className="text-gray-300 my-4">C/C++</p>
          </div>
          <div className="shadow-md shadow-emerald-500 hover:scale-110 duration-300">
            <img
              className="w-[100px] mx-auto"
              src={javascript}
              alt="javascript"
            />
            <p className="text-gray-300 my-4">javaScript</p>
          </div>
          <div className="shadow-md shadow-emerald-500 hover:scale-110 duration-300">
            <img className="w-[100px] mx-auto" src={react} alt="react" />
            <p className="text-gray-300 my-4">React</p>
          </div>
          <div className="shadow-md shadow-emerald-500 hover:scale-110 duration-300">
            <img className="w-[100px] mx-auto" src={git} alt="git" />
            <p className="text-gray-300 my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
