const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#0a192f]">
      {/* info*/}
      <div className=" max-w-[1000px] flex flex-col justify-center px-8  h-[60%] mx-[200px]">
        <p className=" text-green-400">Hi,my name is</p>
        <h1 className=" text-7xl font-bold text-gray-300">Eslam Mahmoud</h1>
        <h2 className=" text-5xl font-bold text-gray-400 ">
          I&apos;m a Software Engineer
        </h2>
        <p className=" text-gray-400">
          I love learing new things and building new projects
        </p>
      </div>
    </div>
  );
};
export default Home;
