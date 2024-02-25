import Button from "./Button";
import Logo from "./logo";

type NavBarProps = {
  onClick: () => void;
};

const NavBar = ({ onClick }: NavBarProps) => {
  return (
    <div className="bg-home p-4 flex justify-between items-center">
      <Logo />
      <Button onClick={onClick} value="Get started" />
    </div>
  );
};

export default NavBar;
