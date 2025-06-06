const Heading = () => {
  return (
    <div className="flex flex-col justify-center h-full text-center">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Better Data
        </span>{" "}
        Scalable AI.
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Flowbite focuses on markets where technology, innovation, and capital.
      </p>
    </div>
  );
};
export default Heading;
