import logo from "../../assets/logo.svg";

export const Logo = () => {
  return (
    <a href="/" className="size-14 flex items-center justify-center min-w-36">
      <img src={logo} alt="logo" className="size-12" />
      <h2 className="text-h2 text-xl!">EdgeAI</h2>
    </a>
  );
};
