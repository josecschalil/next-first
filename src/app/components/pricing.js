const PricingCard = ({ title, price, features }) => (
  <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
      {title}
    </h5>
    <div className="flex items-baseline text-gray-900 dark:text-white">
      <span className="text-3xl font-semibold">$</span>
      <span className="text-5xl font-extrabold tracking-tight">{price}</span>
      <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
        /month
      </span>
    </div>
    <ul role="list" className="space-y-5 my-7">
      {features.map(({ text, included }, index) => (
        <li
          key={index}
          className={`flex ${
            !included ? "line-through decoration-gray-500" : ""
          }`}
        >
          <svg
            className={`shrink-0 w-4 h-4 ${
              included
                ? "text-blue-700 dark:text-blue-500"
                : "text-gray-400 dark:text-gray-500"
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500 ms-3">
            {text}
          </span>
        </li>
      ))}
    </ul>
    <button
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
    >
      Choose plan
    </button>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "19",
      features: [
        { text: "1 team member", included: true },
        { text: "10GB Cloud storage", included: true },
        { text: "Email support", included: true },
        { text: "API Access", included: false },
        { text: "Sketch Files", included: false },
      ],
    },
    {
      title: "Standard Plan",
      price: "49",
      features: [
        { text: "2 team members", included: true },
        { text: "20GB Cloud storage", included: true },
        { text: "Integration help", included: true },
        { text: "Sketch Files", included: false },
        { text: "API Access", included: false },
      ],
    },
    {
      title: "Pro Plan",
      price: "99",
      features: [
        { text: "5 team members", included: true },
        { text: "100GB Cloud storage", included: true },
        { text: "Priority support", included: true },
        { text: "API Access", included: true },
        { text: "Complete documentation", included: true },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <br />

      <h1 className="text-5xl font-bold mb-10 text-center">Pricing Plans</h1>
      <br />
      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
      <br />
    </div>
  );
};

export default Pricing;
