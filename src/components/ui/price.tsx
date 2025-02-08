interface PricingTier {
  name: string;
  description: string;
  features: string[];
  units: string;
  users: string;
  monthly: string;
  yearly: string;
  fees: string;
  client: string;
}

const tiers: PricingTier[] = [
  {
    name: "Starter",
    description: "Basic features, limited support",
    features: [],
    units: "1",
    users: "1",
    monthly: "FREE",
    yearly: "FREE",
    fees: "0",
    client: "New users for one year only, then Direct becomes the basic package"
  },
  {
    name: "Basic",
    description: "Additional features, standard support",
    features: [
      "• Booking",
      "• Contract management",
      "• Channel management",
      "• Calendar",
      "• CRM"
    ],
    units: "1-4",
    users: "2",
    monthly: "81",
    yearly: "890 Discount/1M",
    fees: "0",
    client: "Small companies"
  },
  {
    name: "Advanced",
    description: "Advanced features, fast support",
    features: [
      "• Special domain",
      "• Payment gateway"
    ],
    units: "8",
    users: "unlimited",
    monthly: "90",
    yearly: "1000 Discount/1M",
    fees: "5% Per booking",
    client: "Medium companies"
  },
  {
    name: "Enterprise",
    description: "Full customization as needed, systems integration, 24/7 support",
    features: [],
    units: "unlimited",
    users: "unlimited",
    monthly: "DEAL",
    yearly: "DEAL",
    fees: "5% Per booking",
    client: "Large companies"
  }
];

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
  const plans = [
    {
      name: "Free",
      price: "FREE",
      description: "Basic features, limited support",
      features: [
        "Units: 1",
        "Users: 1",
        "Yearly: FREE",
        "Fees: 0"
      ]
    },
    {
      name: "Basic",
      price: "81",
      period: "/month",
      description: "Additional features, standard support",
      features: [
        "Units: 1-4",
        "Users: 2",
        "Yearly: 890 Discount/1M",
        "Fees: 0",
        "• Booking",
        "• Contract management",
        "• Channel management",
        "• Calendar",
        "• CRM"
      ]
    },
    {
      name: "Advanced",
      price: "90",
      period: "/month",
      description: "Advanced features, fast support",
      features: [
        "Units: 8",
        "Users: unlimited",
        "Yearly: 1000 Discount/1M",
        "Fees: 5% Per booking",
        "• Special domain",
        "• Payment gateway"
      ]
    },
    {
      name: "Enterprise",
      price: "DEAL",
      description: "Full customization as needed, systems integration, 24/7 support",
      features: [
        "Units: unlimited",
        "Users: unlimited",
        "Yearly: DEAL",
        "Fees: 5% Per booking"
      ]
    }
  ];

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Pricing & Plans</h2>
          <p className="mt-4 mb-16 text-gray-600">Choose the plan that best suits your needs.</p>
        </div>

        <div className="grid grid-cols-4 gap-x-8">
          {plans.map((plan) => (
            <div key={plan.name} className="relative">
              <div className="text-blue-600 font-semibold">{plan.name}</div>
              <div className="mt-4 flex items-baseline">
                <span className="text-6xl font-bold tracking-tight">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-sm font-semibold text-gray-600 ml-1">
                    {plan.period}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-gray-600">
                {plan.description}
              </p>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <div className="mx-auto max-w-4xl">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Add-Ons</h3>
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-blue-50">
                    <th scope="col" className="py-4 px-6 text-left text-sm font-semibold text-gray-900">
                      Add-Ons
                    </th>
                    <th scope="col" className="py-4 px-6 text-left text-sm font-semibold text-gray-900">
                      Cost
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {addOns.map((addon) => (
                    <tr key={addon.name} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6 text-sm text-gray-900">
                        {addon.name}
                      </td>
                      <td className="py-4 px-6 text-sm text-gray-600">
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
