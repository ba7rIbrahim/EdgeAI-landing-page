import { Zap } from "lucide-react";
import { Paragraph, Title } from "../shared";

const aboutCards = [
  {
    icon: <Zap className="svg" />,
    title: "Mission",
    paragraph:
      "Our mission is to use AI for the good of humanity and the planet.",
  },
  {
    icon: <Zap className="svg" />,
    title: "Vision",
    paragraph: "Our vision is to drive business innovation and growth.",
  },
];

export const AboutUs = () => {
  return (
    <section id="about-us" className="my-10">
      <div className="flex flex-col md:flex-row gap-8 md:items-center">
        <div className="w-full md:w-5/12 lg:1/2">
          <div className="w-full sm:h-96 md:h-80">
            <img
              src="https://images.pexels.com/photos/8728381/pexels-photo-8728381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="about"
              className="size-full object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="space-y-4 mb-6">
            <Title>About Our AI Solution</Title>
            <Paragraph>
              We are on a mission to empower businesses with transformative AI
              technology. Our team of experts combines industry‑leading research
              with innovative algorithms to deliver a platform that adapts to
              your unique needs. Join us and lead the digital revolution in your
              industr
            </Paragraph>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl">
            {aboutCards.map((card, key) => (
              <div
                key={key}
                className="bg-box min-2-72 flex flex-col gap-4 p-6 rounded-2xl border shadow-md border-border"
              >
                {card.icon}
                <h2 className="text-h2 text-[16px]">{card.title}</h2>
                <p className="text-p">{card.paragraph}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
