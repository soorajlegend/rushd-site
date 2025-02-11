import { cn } from "@/lib/utils";

interface AddOn {
  name: string;
  cost: string;
}

const addOns: AddOn[] = [
  { name: "Add Unit", cost: "50 per yearly" },
  { name: "Dynamic Pricing", cost: "25 per unit per monthly" },
  { name: "Smartlocks", cost: "15 per smartlock per monthly" },
  { name: "Onboarding", cost: "299 One-time" },
  { name: "Report", cost: "199 One-time" },
];

const PricingSection = () => {
  const allFeatures = [
    "Booking",
    "Contract management",
    "Channel management",
    "Calendar",
    "CRM",
    "Special domain",
    "Payment gateway",
  ];

  const plans = [
    {
      name: "Free",
      price: "FREE",
      description: "Basic features, limited support",
      features: allFeatures,
      availableFeatures: [],
      units: "1",
      users: "1",
      yearly: "FREE",
      fees: "0",
    },
    {
      name: "Basic",
      price: "81",
      period: "/month",
      description: "Additional features, standard support",
      features: allFeatures,
      availableFeatures: [
        "Booking",
        "Contract management",
        "Channel management",
        "Calendar",
        "CRM",
      ],
      units: "1-4",
      users: "2",
      yearly: "890 Discount/1M",
      fees: "0",
    },
    {
      name: "Advanced",
      price: "90",
      period: "/month",
      description: "Advanced features, fast support",
      features: allFeatures,
      availableFeatures: [
        "Booking",
        "Contract management",
        "Channel management",
        "Calendar",
        "CRM",
        "Special domain",
        "Payment gateway",
      ],
      units: "8",
      users: "unlimited",
      yearly: "1000 Discount/1M",
      fees: "5% Per booking",
    },
    {
      name: "Enterprise",
      price: "DEAL",
      description:
        "Full customization as needed, systems integration, 24/7 support",
      features: allFeatures,
      availableFeatures: [
        "Booking",
        "Contract management",
        "Channel management",
        "Calendar",
        "CRM",
        "Special domain",
        "Payment gateway",
      ],
      units: "unlimited",
      users: "unlimited",
      yearly: "DEAL",
      fees: "5% Per booking",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose Your Plan
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Simple, transparent pricing that grows with your business
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all duration-200 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex flex-col">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold leading-7 text-gray-900">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <p className="flex items-baseline">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm font-semibold text-gray-600 ml-2">
                        {plan.period}
                      </span>
                    )}
                  </p>
                </div>

                <ul className="space-y-3 text-sm leading-6 text-gray-600">
                  <li className="flex items-center">
                    <span>Units: {plan.units}</span>
                  </li>
                  <li className="flex items-center">
                    <span>Users: {plan.users}</span>
                  </li>
                  <li className="flex items-center">
                    <span>Yearly: {plan.yearly}</span>
                  </li>
                  <li className="flex items-center">
                    <span>Fees: {plan.fees}</span>
                  </li>
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      className={cn(
                        "flex items-center",
                        !plan.availableFeatures.includes(feature) &&
                          "cursor-default"
                      )}
                    >
                      <svg
                        className={cn(
                          "h-5 w-5 text-orange-500 mr-2",
                          !plan.availableFeatures.includes(feature) &&
                            "text-gray-400"
                        )}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {plan.availableFeatures.includes(feature) ? (
                        feature
                      ) : (
                        <del>{feature}</del>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32">
          <div className="mx-auto max-w-4xl">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">
              Enhance Your Experience
            </h3>
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th
                      scope="col"
                      className="py-6 px-8 text-left text-sm font-semibold text-gray-900"
                    >
                      Add-Ons
                    </th>
                    <th
                      scope="col"
                      className="py-6 px-8 text-left text-sm font-semibold text-gray-900"
                    >
                      Cost
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {addOns.map((addon) => (
                    <tr
                      key={addon.name}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-6 px-8 text-sm font-medium text-gray-900">
                        {addon.name}
                      </td>
                      <td className="py-6 px-8 text-sm text-gray-600">
                        {addon.cost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
