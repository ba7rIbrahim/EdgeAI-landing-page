import { Logo, NavActions, NavItems } from "../shared";

export const Header = () => {
  return (
    <header className="flex justify-between items-center my-4">
      <Logo />
      <div className="hidden md:block">
        <NavItems />
      </div>
      <NavActions />
    </header>
  );
};
