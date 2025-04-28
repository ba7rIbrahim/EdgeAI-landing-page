import { Title } from "../shared";

const logos = ["discord", "openai", "paypal", "slack", "spotify", "youtube"];

export const Brands = () => {
  return (
    <section className="my-10">
      <Title className="text-center mb-10">Trusted by Industry Leaders</Title>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        {logos.map((logo, key) => (
          <div
            key={key}
            className="border border-border p-5 md:p-4 rounded-xl bg-body shadow-md"
          >
            <img
              src={`assets/logos/${logo}.png`}
              alt="logo"
              className="h-10 md:h-7 w-auto grayscale"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
