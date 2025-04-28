interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export const Title = ({ children, className = "" }: TitleProps) => {
  return (
    <h1 className={`text-h1 font-semibold text-3xl md:text-6xl ${className}`}>
      {" "}
      {children}{" "}
    </h1>
  );
};
