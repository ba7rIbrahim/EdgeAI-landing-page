import { SectionHeader } from "../shared/SectionHeader";
import { Button } from "../ui";

const pricing = [
  {
    type: "Basic",
    price: "$19/mo",
    bestValue: false,
    features: [
      "Access to basic AI tools",
      "Limited data analytics",
      "Email support",
    ],
  },
  {
    type: "Pro",
    price: "$49/mo",
    bestValue: true,
    features: [
      "Everything in Basic",
      "Advanced AI features",
      "Real-time analytics",
      "Priority email support",
    ],
  },
  {
    type: "Enterprise",
    price: "$99/mo",
    bestValue: false,
    features: [
      "Everything in Pro",
      "Detected account manager",
      "Custom integration",
      "24/7 premium support",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="my-10">
      <SectionHeader
        title="Pricing"
        subtitle="Choose the plan that's right for your business"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-10">
        {pricing.map((priceCard, key) => (
          <div
            key={key}
            className="relative bg-box flex flex-col justify-between min-w-max
                      gap-4 p-6 rounded-xl border-2 shadow-md border-primary"
          >
            {priceCard.bestValue && (
              <span
                className="absolute w-32 h-6 bg-primary text-white rounded 
                          text-center top-0 left-1/2 -translate-1/2"
              >
                best choice
              </span>
            )}
            <div className="border-b border-primary pb-4 text-center">
              <h2 className="text-h2 text-primary! text-[16px]">
                {priceCard.type}
              </h2>
              <p className="text-h3">{priceCard.price}</p>
            </div>
            <ul className="flex flex-col gap-y-2">
              {priceCard.features.map((feature, key) => (
                <div key={key} className="flex items-center gap-2">
                  <span>✅</span>
                  <span className="text-p text-[17px]!">{feature}</span>
                </div>
              ))}
            </ul>
            <Button className="mt-8">Choose Plan</Button>
          </div>
        ))}
      </div>
    </section>
  );
};
