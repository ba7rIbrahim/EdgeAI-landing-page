import { Paragraph } from "./Paragraph";
import { Title } from "./Title";

interface HeadingProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ title, subtitle }: HeadingProps) => {
  return (
    <div className="text-center space-y-4 mb-10">
      <Title>{title}</Title>
      <Paragraph>{subtitle}</Paragraph>
    </div>
  );
};
