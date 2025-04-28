import { SendHorizontal } from "lucide-react";
import { SectionHeader } from "../shared";

const services = [
  {
    icon: <SendHorizontal size={35} className="svg" />,
    title: "Intelligent Automation",
    paragraph: "Streamline processes and reduce manual tasks.",
  },
  {
    icon: <SendHorizontal size={35} className="svg" />,
    title: "Real-Time Analytics",
    paragraph: "Gain actionable insight as event unfold.",
  },
  {
    icon: <SendHorizontal size={35} className="svg" />,
    title: "Predictive Insights",
    paragraph: "Anticipate trends and mitigate risks before they occur.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="my-10">
      <SectionHeader
        title="Our AI Services"
        subtitle="Unlock the potential of advanced machine learning, naturel language 
                processing, and predictive analytics. Our services include:"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:mx-10">
        {services.map((service, key) => (
          <div
            key={key}
            className="bg-box flex flex-col gap-4 p-6 rounded-2xl border shadow-md border-border"
          >
            {service.icon}
            <h2 className="text-h2 text-[16px]">{service.title}</h2>
            <p className="text-p">{service.paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
