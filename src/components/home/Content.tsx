import { Button } from "@chakra-ui/react";
type ContentProps = {
  onClick: () => void;
};
const Content = ({ onClick }: ContentProps) => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <p className="text-48 font-Rubik mb-1 text-black"> Clean inbox for</p>
      <p className="text-48 text-black font-Rubik mb-1">
        {" "}
        a <span className="text-textBlue text-48 font-Rubik"> clean mind</span>
      </p>
      <div className="py-4 ps-5 pe-5">
        <p className="text-16 text-black font-Rubik text-center ">
          Remove all unwanted email subscriptions
        </p>
        <p className="text-16 text-black font-Rubik text-center ">
          <span className="text-textBlue text-16 font-Rubik"> at once</span>,
          reclaiming a clean inbox.
        </p>
      </div>
      <Button width={"88%"} variant={"round"} onClick={onClick}>
        Get started{" "}
      </Button>
    </div>
  );
};

export default Content;
