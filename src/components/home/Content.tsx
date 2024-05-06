import { Button } from "@chakra-ui/react";
type ContentProps = {
  onClick: () => void;
};
const Content = ({ onClick }: ContentProps) => {
  return (
    <div className="flex flex-col items-start max-sm:items-center">
      <div className="max-sm:w-[90%] w-[68%] max-sm:text-43  text-48 flex text-start max-sm:text-center justify-center font-Rubik mb-1 text-black">
        <span>
          Clean your inbox in{" "}
          <span className="text-textBlue text-48 font-Rubik"> one click.</span>{" "}
        </span>
      </div>
      <div className="py-4 ps-5 pe-5">
        <p className="text-16 text-black font-Rubik text-center ">
          Remove all unwanted email subscriptions
        </p>
        <p className="text-16 text-black font-Rubik text-center ">
          <span className="text-textBlue text-16 font-Rubik"> at once</span>,
          reclaiming a clean inbox.
        </p>
      </div>
      <Button
        className="max-md:w-[88%] w-[50%]"
        variant={"round"}
        onClick={onClick}
      >
        Get started{" "}
      </Button>
    </div>
  );
};

export default Content;
