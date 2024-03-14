import Logo from "./logo";
import { Button } from "@chakra-ui/react";
type NavBarProps = {
  onClick: () => void;
};

const NavBar = ({ onClick }: NavBarProps) => {
  return (
    <div className="shadow-md p-4 flex justify-between items-center">
      <Logo />
      <Button size="lg" variant={"round"} onClick={onClick}>
        Get started{" "}
      </Button>
    </div>
  );
};

export default NavBar;
