const ProjectPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-10 bg-gradient-to-r from-blue-50 to-white rounded-2xl shadow-lg dark:from-gray-900 dark:to-gray-800 dark:text-gray-200 my-20">
      <h1 className="text-4xl font-extrabold mb-8">About Us</h1>
      <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        Welcome to{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-500">
          Our Company
        </span>
        ! We are passionate about delivering top-notch solutions tailored to
        your unique needs. Our dedicated team thrives on innovation and
        excellence to help you succeed.
      </p>
      <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        Since our founding in 2020, we have grown rapidly by focusing on
        customer satisfaction and embracing cutting-edge technology. We value
        transparency, integrity, and collaboration to foster long-lasting
        partnerships.
      </p>
      <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        Whether you're seeking innovative software, expert consulting, or
        dependable support, we are committed to empowering your business every
        step of the way.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-6 border-l-4 border-blue-600 pl-4 dark:border-blue-500">
        Our Mission
      </h2>
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 italic">
        To empower businesses and individuals with innovative technology and
        dedicated service, fostering growth and success in a rapidly changing
        world.
      </p>
    </div>
  );
};

export default ProjectPage;
