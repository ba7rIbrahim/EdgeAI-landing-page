import { Paragraph, Title } from "../shared";
import { Button } from "../ui";

export const CallToAction = () => {
  return (
    <section className="my-10">
      <div className="flex flex-col items-center text-center space-y-6">
        <Title>
          Quick start you{" "}
          <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
            own AI
          </span>{" "}
          Business
        </Title>
        <Paragraph>
          Our AI SaaS platform seamlessly integrates with your existing
          workflows to deliver real‑time insights, intelligent automation, and
          data‑driven decision-making. Experience a future where your business
          runs smarter, faster, and more efficiently.
        </Paragraph>
        <Button className="px-8!">Get In Touch</Button>
      </div>
    </section>
  );
};
