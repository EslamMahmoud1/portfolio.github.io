const Navbar = () => {
  return (
    <div className=" w-full h-[80px] flex justify-evenly items-center  px-4  bg-emerald-500">
      {/* menu */}
      <div>
        <ul className=" flex ">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>CV</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
