type FactTailProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
  title: string;
  text: string;
};
const FactTail = ({ Icon, title, text }: FactTailProps) => {
  return (
    <div className="flex w-full flex-col items-start ps-4 pt-[1.5rem] pb-4 mr-4 min-h-[220px] max-h-[220px]  shadow-xl max-sm:items-center mb-5">
      <div>
        <Icon />
      </div>
      <div className="flex flex-col font-Rubik text-black text-left mt-5">
        <p className="text-24 font-bold">{title} </p>
        <p className="text-16">{text}</p>
      </div>
    </div>
  );
};
export default FactTail;
