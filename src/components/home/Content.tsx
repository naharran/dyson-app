import { ReactComponent as MainIcon } from "../../assets/main.svg";
const Content = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <p className="text-24 mb-1 text-black"> Free mail,</p>
      <p className="text-24 text-black mb-1"> Free mind</p>
      <MainIcon />
      <div className="py-4 ps-5 pe-5">
        <p>
          some text here some text heresome text heresome text heresome text
          herevvsome text heresome text heresome text here
        </p>
      </div>
    </div>
  );
};

export default Content;
