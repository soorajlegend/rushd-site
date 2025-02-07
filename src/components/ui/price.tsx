interface PricingTier {
    name: string;
    price: number;
    description: string;
    features: string[];
  }
  
  const pricingTiers: PricingTier[] = [
    {
      name: "Basic",
      price: 99,
      description: "Best for small business owners, startups who needs landing page for their business.",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3"
      ]
    },
    {
      name: "Premium",
      price: 199,
      description: "Best for medium business owners, startups who needs landing page for their business.",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5"
      ]
    },
    {
      name: "Enterprise",
      price: 399,
      description: "Best for large companies, business owners who needs landing page for their business.",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5"
      ]
    }
  ];
  
  const PricingSection = () => {
    return (
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Make the wise decision
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose from our affordable 3 packages
          </p>
        </div>
  
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 shadow-lg ${
                tier.name === "Premium"
                  ? "bg-black text-white ring-2 ring-indigo-500"
                  : "bg-white"
              }`}
            >
              <div className="mb-8">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <p className="mt-4 text-5xl font-bold tracking-tight">
                  ${tier.price}
                </p>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  {tier.description}
                </p>
              </div>
  
              <button className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500">
                Get Started
              </button>
  
              <div className="mt-8">
                <h4 className="text-sm font-semibold">What's included:</h4>
                <ul className="mt-4 space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default PricingSection;