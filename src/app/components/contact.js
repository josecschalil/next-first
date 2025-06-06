const Contact = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 rounded-lg shadow-md p-6 bg-gray-50 dark:bg-gray-800">
        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Stay in the loop
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Get product updates and important news delivered straight to your
            inbox.
          </p>
        </div>

        {/* Form Section */}
        <form className="flex flex-col md:flex-row gap-4 items-start md:items-end w-full md:w-auto">
          <div className="flex flex-col w-full md:w-64">
            <label
              htmlFor="email"
              className="mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              required
              className="w-full p-2.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none 
                         focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="whitespace-nowrap bg-blue-700 hover:bg-blue-800 text-white text-sm font-medium 
                       rounded-lg px-5 py-2.5 focus:outline-none focus:ring-4 focus:ring-blue-300 
                       dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
