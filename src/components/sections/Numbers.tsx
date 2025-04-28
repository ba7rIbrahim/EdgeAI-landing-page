const NumbersBlocks = [
  { quantity: "100+", text: "AI Models Implemented" },
  { quantity: "250+", text: "Enterprise Clients" },
  { quantity: "99.9%", text: "Uptime Guarantee" },
  { quantity: "10+", text: "Years of Innovation" },
];

export const Numbers = () => {
  return (
    <section
      className="grid grid-cols-2 md:grid-cols-4 bg-box md:mx-10 shadow-md
                md:p-4 rounded-3xl md:divide-x-2  divide-background border border-border"
    >
      {NumbersBlocks.map((item, key) => (
        <div
          key={key}
          className="flex flex-col items-center justify-center p-4 text-center min-w-[62px]"
        >
          <h2 className="text-h2">{item.quantity}</h2>
          <span className="text-h3">{item.text}</span>
        </div>
      ))}
    </section>
  );
};
