import { Paragraph, Title } from "../shared";
import { Button } from "../ui";
import { Numbers } from "./Numbers";

export const Hero = () => {
  return (
    <section className="mt-16 space-y-18">
      <div className="flex flex-col justify-center items-center md:flex-row gap-8">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
          <Title>
            Empower Your Business{" "}
            <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
              with AI
            </span>
          </Title>
          <Paragraph className="mb-8">
            Our AI SaaS platform seamlessly integrates with your existing
            workflows to deliver real‑time insights, intelligent automation, and
            data‑driven decision-making. Experience a future where your business
            runs smarter, faster, and more efficiently.
          </Paragraph>
          <form action="#">
            <div className="md:max-w-[350px] lg:max-w-[450px] flex items-center relative">
              <input
                type="email"
                className="input w-full min-h-[60px] shadow-sm outline-none border border-border"
                placeholder="johndoe@gamil.com"
              />
              <Button className="absolute right-1">Get Started</Button>
            </div>
          </form>
        </div>
        <div className="flex-1">
          <img
            src="/assets/image/hero.jpg"
            alt="hero-image"
            className="size-full rounded-3xl"
          />
        </div>
      </div>
      <Numbers />
    </section>
  );
};
