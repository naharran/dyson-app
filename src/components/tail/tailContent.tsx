type TailContentProps = {
  number: string;
  text: string;
};
const TailContent = ({ number, text }: TailContentProps) => {
  return (
    <div className=" ml-2 flex flex-col justify-center text-16 font-Rubik text-black text-center">
      <p>
        {" "}
        <span className="text-textBlue">{number}</span> {text}{" "}
      </p>
    </div>
  );
};

export default TailContent;
